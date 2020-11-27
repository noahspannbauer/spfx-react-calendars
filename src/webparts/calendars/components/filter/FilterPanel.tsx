import * as React from 'react';
import styles from './FilterPanel.module.scss';
import { IFilterPanelProps } from '../../models/IFilterPanelProps';
import { IContentType } from '../../models/IContentType';
import { useAppContext } from '../../hooks/useAppContext/UseAppContext';
import { reducer, initialState } from './reducer';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { IFilterOptionItem } from '../../models/IFilterOptionItem';
import { AppContext } from '../../hooks/useAppContext/AppContext';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

const FilterPanel: React.FC<{}> = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const appContext = useAppContext();

  const setFilterOptionItems = async (
    contentTypes: IContentType[],
    selectedContentTypes: string[]
  ): Promise<IFilterOptionItem[]> => {
    try {
      const filterOptionItems: IFilterOptionItem[] = contentTypes.map(
        (contentType: IContentType) => {
          const selectedContentTypeExists = selectedContentTypes.filter(
            (selectedContentType: string) => {
              if (selectedContentType === contentType.contentTypeName) {
                return selectedContentType;
              }
            }
          );
          let filterOptionItem: IFilterOptionItem;

          if (selectedContentTypeExists.length > 0) {
            filterOptionItem = {
              key: contentType.contentTypeName,
              value: contentType.contentTypeName,
              checked: true
            };
          } else {
            filterOptionItem = {
              key: contentType.contentTypeName,
              value: contentType.contentTypeName,
              checked: false
            };
          }

          return filterOptionItem;
        }
      );

      return Promise.resolve<IFilterOptionItem[]>(filterOptionItems);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const onCheckboxChangedHandler = (selectedFilterOptionItem: IFilterOptionItem) => {
    return (event: React.FormEvent<HTMLElement>, checked: boolean) => {
        onCheckboxChanged(selectedFilterOptionItem);
    }
  }

  const onCheckboxChanged = (selectedFilterOptionItem: IFilterOptionItem) => {
      const selectedFilterOptionItemIndex: number = state.filterOptionItems.map((filterOptionItem: IFilterOptionItem) => {
          return filterOptionItem.key;
      }).indexOf(selectedFilterOptionItem.key);
      const filterOptionItems: IFilterOptionItem[] = state.filterOptionItems;
      const filterOptionItem = filterOptionItems[selectedFilterOptionItemIndex];

      filterOptionItem.checked = !selectedFilterOptionItem.checked;
      
      dispatch(['SET_FILTER_OPTION_ITEMS', filterOptionItems]);
  }

  const onDismissFilterPanel = () => {
      appContext.setFilterPanel();
  };

  React.useEffect(() => {
    const getFilterOptionItems = async () => {
      const selectedContentTypes: string[] =
        appContext.state.selectedContentTypes;
      const filterOptionItems: IFilterOptionItem[] = await setFilterOptionItems(
        appContext.state.initialContentTypes,
        selectedContentTypes
      );

      console.log()

      dispatch([
        'SET_INITIAL_FILTER_OPTION_ITEMS',
        {
          filterOptionItems: filterOptionItems,
          selectedFilterOptionItems: selectedContentTypes,
          isLoading: false
        }
      ]);
    };

    if (appContext.state.initialContentTypes.length > 0) {
        getFilterOptionItems();
    }

    
  }, [appContext.state.initialContentTypes]);

  return (
    <Panel
      isOpen={appContext.state.isFilterPanelOpen}
      headerText='Content Types'
      onDismiss={onDismissFilterPanel}
    >
        <div className={styles.filterPanel}>
            <div className={styles.grid}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <ul>
                            {state.filterOptionItems.map((filterOptionItem: IFilterOptionItem) => {
                                return (
                                    <li key={filterOptionItem.key}>
                                    <Checkbox
                                        key={filterOptionItem.key}
                                        label={filterOptionItem.value}
                                        checked={filterOptionItem.checked}
                                        onChange={onCheckboxChangedHandler(filterOptionItem)}
                                    />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <PrimaryButton>Apply</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    </Panel>
  );
};

export default FilterPanel;
