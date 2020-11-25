import * as React from 'react';
import { AppContext } from '../useAppContext/AppContext';

export const useAppContext = () => {
    const { contentTypes, state, dispatch } = React.useContext(AppContext);

    const getInitialContentTypes = () => {
        return state.initialContentTypes;
    }

    const setInitialContentTypes = (initialContentTypes: any[]) => {
        dispatch(['SET_INITIAL_CONTENT_TYPES', initialContentTypes]);
    }

    const getSelectedContentTypes = () => {
        return state.selectedContentTypes;
    }

    const setSelectedContentTypes = (selectedContentTypes: any[]) => {
        dispatch(['SET_SELECTED_CONTENT_TYPES', selectedContentTypes]);
    }

    React.useMemo(() => {
        setInitialContentTypes(contentTypes);
        setSelectedContentTypes(contentTypes);
    }, []);

    return {
        state,
        getInitialContentTypes,
        getSelectedContentTypes,
        setSelectedContentTypes
    }
}