import React, { useEffect, useReducer } from "react";
import styles from './FilterPanel.module.scss';
import Popup from '../popup/Popup';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { IFilter } from "../../models/IFilter";
import { useAppContext } from "../../hooks/appContext/UseAppContext";
import { useUserFavorites } from "../../hooks/userFavorites/UseUserFavorites";
import { useQueryString } from "../../hooks/queryString/UseQueryString";
import { reducer, initialState } from './reducer';
import { DefaultButton, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { sp } from '@pnp/sp';
import { ISiteUserInfo } from "@pnp/sp/site-users/types";
import '@pnp/sp/webs';
import '@pnp/sp/site-users/web';
import '@pnp/sp/lists';
import '@pnp/sp/items';

const FilterPanel: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { userFavorites, userFavoritesId } = useUserFavorites();
    const appContext = useAppContext();
    const { queryString } = useQueryString(state.selectedFilters, appContext.state.startDate, appContext.state.endDate);
    const isFilterPanelOpen: boolean = appContext.state.isFilterPanelOpen;

    const getFilters = async (): Promise<IFilter[]> => {
        try {
            const contentTypeHubSpIds = await appContext.state.msGraphClient.api('/sites/noahspan.sharepoint.com:/sites/contenttypehub?$select=sharepointIds').get();
            const contentTypeHubSiteId = contentTypeHubSpIds.sharepointIds.siteId;
            const contentTypeHubTypes = await appContext.state.msGraphClient.api(`/sites/${contentTypeHubSiteId}/contentTypes?$filter=group eq '${appContext.state.contentTypeCategories[0].contentTypeCategory}'`).get();
            const filteredContentTypes: any[] = contentTypeHubTypes.value.filter((contentType) => {
                if (contentType.name !== 'Game') {
                    return contentType
                }
            });
            const filters: IFilter[] = filteredContentTypes.map((filteredContentType: any) => {
                const contentType: IFilter = {
                    id: filteredContentType.id,
                    name: filteredContentType.name,
                    isSelected: false
                }

                return contentType;
            }).sort((a, b) => (a.name > b.name) ? 1 : -1);
            
            return Promise.resolve<IFilter[]>(filters);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    const getSelectedFilters = (filters: IFilter[]): string[] => {
        const selectedFilters: IFilter[] = filters.filter((filter) => {
            if (filter.isSelected) {
                return filter.name;
            }
        });
        const newSelectedFilters: string[] = selectedFilters.map((selectedFilter) => {
            return selectedFilter.name
        });

        return newSelectedFilters
    }

    const onCheckboxChanged = (event: React.FormEvent<HTMLElement | HTMLInputElement>, checked: boolean) => {
        const newFilters: IFilter[] = [...state.filters];
        const checkboxElement: HTMLElement = event.target as HTMLElement;
        const filterName: string = checkboxElement.getAttribute('aria-label');
        const selectedFilterIndex: number = newFilters.findIndex(filter => filter.name === filterName);
        let newSelectedFilters: string[];
        
        newFilters[selectedFilterIndex] = {
            id: newFilters[selectedFilterIndex].id,
            name: newFilters[selectedFilterIndex].name,
            isSelected: !newFilters[selectedFilterIndex].isSelected
        };

        newSelectedFilters = getSelectedFilters(newFilters);

        dispatch({ type: "SET_FILTERS", payload: { filters: newFilters, selectedFilters: newSelectedFilters, isLoading: false }});
    }

    const onApply = () => {
        if (state.selectedFilters.length > 0) {
            appContext.dispatch({ type: 'SET_QUERY_STRING', payload: queryString })
            appContext.dispatch({ type: 'SET_IS_FILTER_PANEL_OPEN', payload: false })
        }
    }

    const onSaveAsFavorites = async () => {
        try {
            const currentUser: ISiteUserInfo = await sp.web.currentUser();
            const selectedFilters: IFilter[] = state.filters.filter((filter: IFilter) => {
                if (filter.isSelected) {
                    return filter;
                }
            })
            const favorites: string[] = [];
            let newUserFavorites: string;

            for (let selectedFilter of selectedFilters) {
                favorites.push(selectedFilter.name);
            }

            newUserFavorites = favorites.join(';');

            if (userFavorites) {
                await sp.web.lists.getByTitle('Favorites').items.getById(userFavoritesId).update({
                    Favorites: newUserFavorites
                })
            } else {
                await sp.web.lists.getByTitle('Favorites').items.add({
                    UserId: currentUser.Id,
                    Favorites: newUserFavorites
                })
            }

            dispatch({ type: 'SET_POPUP', payload: { popupType: 'success', popupHeading: 'Success', popupMessage: 'Your favorities were successfully saved.' }})
            appContext.dispatch({ type: 'SET_IS_POPUP_HIDDEN', payload: false });
            
        } catch(error) {
            dispatch({ type: 'SET_POPUP', payload: { popupType: 'error', popupHeading: 'Error', popupMessage: `An error occurred with the following message: ${error.message}` }})
            appContext.dispatch({ type: 'SET_IS_POPUP_HIDDEN', payload: false });
        }  
    }

    const onDismissPanel = () => {
        appContext.dispatch({ type: 'SET_IS_FILTER_PANEL_OPEN', payload: !isFilterPanelOpen })
    }

    const onRenderFooterContent = () => {
        return (
            <div className={styles.filterPanel}>
                <div className={styles.grid} dir='ltr'>
                    <div className={styles.row}>
                        <div className={`${styles.col} ${styles.sm4}`}>
                            <PrimaryButton text="Apply" onClick={onApply} />
                        </div>
                        <div className={`${styles.col} ${styles.sm8}`}>
                            <DefaultButton text="Clear" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    useEffect(() => {
        const setFilters = async () => {
            try {
                const filters: IFilter[] = await getFilters();
                const selectedFilters: string[] = userFavorites ? userFavorites : [];

                if (userFavorites) {
                    const favorites: string[] = appContext.state.userFavorites;

                    filters.map((filter: IFilter) => {
                        const filteredFavorite: string[] = favorites.filter((favorite: string) => {
                            if (favorite === filter.name) {
                                return favorite;
                            }
                        })

                        if (filteredFavorite.length > 0) {
                            filter.isSelected = true;
                        } else {
                            filter.isSelected = false
                        }

                        return filter;
                    })
                }

                dispatch({ type: "SET_FILTERS", payload: { filters: filters, selectedFilters: selectedFilters, isLoading: false }})
            } catch(error) {
                dispatch({ type: 'SET_POPUP', payload: { popupType: 'error', popupHeading: 'Error', popupMessage: `An error occurred with the following message: ${error.message}` }})
                appContext.dispatch({ type: 'SET_IS_POPUP_HIDDEN', payload: false });
            }
        }

        if (isFilterPanelOpen) {
            if (state.filters.length === 0) {
                setFilters()
            }
        }
    }, [isFilterPanelOpen])

    return (
        <React.Fragment>
            <Panel
                type={PanelType.smallFixedFar}
                headerText="Filters"
                isOpen={isFilterPanelOpen}
                onDismiss={onDismissPanel}
                closeButtonAriaLabel="Close"
                onRenderFooterContent={onRenderFooterContent}
                isFooterAtBottom={true}
            >
                <div className={`${styles.filterPanel}`}>
                    {state.isLoading && 
                        <div className={styles.grid}>
                            <div className={styles.row}>
                                <div className={`${styles.col} ${styles.sm12}`}>
                                    <Spinner size={SpinnerSize.large} />
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className={`${styles.col} ${styles.sm12}`}>
                                    <Label>Loading filters...</Label>
                                </div>
                            </div>
                        </div>
                    }
                    {state.isLoading === false && 
                        <div className={styles.grid} dir='ltr'>
                            {state.filters.map((filter) => {
                                return (
                                    <div className={`${styles.row} ${styles.filterRow}`} key={filter.id}>
                                        <div className={`${styles.col} ${styles.sm12}`} >
                                            <Checkbox label={filter.name} onChange={onCheckboxChanged} checked={filter.isSelected} />
                                        </div>
                                    </div>
                                )
                            })}
                            <div className={styles.row}>
                                <div className={`${styles.col} ${styles.sm12}`}>
                                    <DefaultButton onClick={onSaveAsFavorites} text="Save as Favorites" />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </Panel>
            {appContext.state.isPopupHidden === false &&
                <Popup
                    popupType={state.popUp.popupType}
                    popupHeading={state.popUp.popupHeading}
                    popupMessage={state.popUp.popupMessage}
                />
            }
        </React.Fragment>
    )
}

export default FilterPanel;