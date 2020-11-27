import * as React from 'react';
import { AppContext } from '../useAppContext/AppContext';

export const useAppContext = () => {
  const { contentTypes, selectedContentTypes, state, dispatch } = React.useContext(AppContext);

  const setInitialContentTypes = (initialContentTypes: any[]) => {
    dispatch(['SET_INITIAL_CONTENT_TYPES', initialContentTypes]);
  };

  const setSelectedContentTypes = (selectedContentTypes: any[]) => {
    dispatch(['SET_SELECTED_CONTENT_TYPES', selectedContentTypes]);
  };

  const setFilterPanel = () => {
    if (state.isFilterPanelOpen) {
      dispatch(['SET_FILTER_PANEL', false])
    } else {
      dispatch(['SET_FILTER_PANEL', true])
    }
  }

  React.useMemo(() => {
    setInitialContentTypes(contentTypes);
    setSelectedContentTypes(selectedContentTypes);
  }, []);

  return {
    state,
    setSelectedContentTypes,
    setFilterPanel
  };
};
