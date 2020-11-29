import * as React from 'react';
import { MSGraphClient } from '@microsoft/sp-http';
import AppContext from './AppContext';

export const useAppContext = () => {
  const {
    contentTypes,
    selectedContentTypes,
    eventTitleFieldName,
    msGraphClient,
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

  const setEventModal = () => {
    if (state.isFilterPanelOpen) {
      dispatch(['SET_EVENT_MODAL', false]);
    } else {
      dispatch(['SET_EVENT_MODAL', true]);
    }    
  }

  const setMSGraphClient = (msGraphClient: MSGraphClient) => {
    dispatch(['SET_MS_GRAPH_CLIENT', msGraphClient]);
  }

  React.useMemo(() => {
    setInitialContentTypes(contentTypes);
    setSelectedContentTypes(selectedContentTypes);
    setEventTitleFieldName(eventTitleFieldName);
    setMSGraphClient(msGraphClient)
  }, []);

  return {
    state,
    setSelectedContentTypes,
    setFilterPanel,
    setEventModal
  };
};
