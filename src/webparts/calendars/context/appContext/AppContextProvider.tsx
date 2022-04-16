import React, { useReducer, useMemo } from 'react';
import { AppContext } from './AppContext';
import { IAppContextProps } from './IAppContextProps';
import { IAppContextProviderProps } from './IAppContextProviderProps';
import { IAppContextState } from './IAppContextState';
import { reducer } from './reducer';

const AppContextProvider: React.FC<IAppContextProviderProps> = (props: IAppContextProviderProps) => {
    const initialState: IAppContextState = {
        msGraphClient: props.msGraphClient,
        contentTypeCategories: props.contentTypeCategories,
        userFavorites: [],
        queryString: '',
        startDate: '',
        endDate: '',
        isFilterPanelOpen: false,
        isSettingsPanelOpen: false,
        isPopupHidden: true,
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const contextValue: IAppContextProps = useMemo(() => {
        return {
            state,
            dispatch
        };
    }, [state, dispatch]);

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;