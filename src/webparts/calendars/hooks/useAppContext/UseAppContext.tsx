import * as React from 'react';
import { MSGraphClient } from '@microsoft/sp-http';
import AppContext from './AppContext';
import { IEventExtendedProps } from '../../models/IEventExtendedProps';

export const useAppContext = () => {
  const {
    contentTypes,
    selectedContentTypes,
    eventTitleFieldName,
    msGraphClient,
    state,
    dispatch
  } = React.useContext(AppContext);

  React.useMemo(() => {
    dispatch({
      type: 'INITIAL_LOAD',
      payload: {
        initialContentTypes: contentTypes,
        selectedContentTypes: selectedContentTypes,
        eventTitleFieldName: eventTitleFieldName,
        msGraphClient: msGraphClient
      }
    });
  }, []);

  return {
    state,
    dispatch
  };
};
