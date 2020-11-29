import * as React from 'react';
import AppContext from './AppContext';

export const useAppContext = () => {
  const {
    contentTypes,
    selectedContentTypes,
    eventTitleFieldName,
    state,
    dispatch
  } = React.useContext(AppContext);

  const setInitialContentTypes = (initialContentTypes: any[]) => {
    dispatch(['SET_INITIAL_CONTENT_TYPES', initialContentTypes]);
  };

  const setSelectedContentTypes = (selectedContentTypes: any[]) => {
    dispatch(['SET_SELECTED_CONTENT_TYPES', selectedContentTypes]);
  };

  const setEventTitleFieldName = (eventTitleFieldName: string) => {
    dispatch(['SET_EVENT_TITLE_FIELD_NAME', eventTitleFieldName]);
  };

  const setFilterPanel = () => {
    if (state.isFilterPanelOpen) {
      dispatch(['SET_FILTER_PANEL', false]);
    } else {
      dispatch(['SET_FILTER_PANEL', true]);
    }
  };

  React.useMemo(() => {
    setInitialContentTypes(contentTypes);
    setSelectedContentTypes(selectedContentTypes);
    setEventTitleFieldName(eventTitleFieldName);
  }, []);

  return {
    state,
    setSelectedContentTypes,
    setFilterPanel
  };
};
