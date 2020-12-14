import { IAppContextState } from './IAppContextState';
import { MSGraphClient } from '@microsoft/sp-http';
import { IEventExtendedProps } from '../../models/IEventExtendedProps';

export const initialState: IAppContextState = {
  initialContentTypes: [],
  selectedContentTypes: [],
  eventTitleFieldName: '',
  msGraphClient: undefined,
  eventExtendedProps: null,
  isEventModalOpen: false,
  isFilterPanelOpen: false
};

export type Action =
  | {
      type: 'INITIAL_LOAD';
      payload: {
        initialContentTypes: any[];
        selectedContentTypes: any[];
        eventTitleFieldName: string;
        msGraphClient: MSGraphClient;
      };
    }
  | { type: 'SET_SELECTED_CONTENT_TYPES'; payload: any[] }
  | { type: 'SET_EVENT_TITLE_FIELD_NAME'; payload: string }
  | { type: 'SET_MS_GRAPH_CLIENT'; payload: MSGraphClient }
  | {
      type: 'SET_EVENT_MODAL';
      payload: {
        eventExtendedProps: IEventExtendedProps;
        isEventModalOpen: boolean;
      };
    }
  | {
      type: 'APPLY_FILTER';
      payload: { selectedContentTypes: any[]; isFilterPanelOpen: boolean };
    }
  | { type: 'SET_FILTER_PANEL'; payload: boolean };

export const reducer = (
  state: IAppContextState,
  action: Action
): IAppContextState => {
  switch (action.type) {
    case 'INITIAL_LOAD': {
      return {
        ...state,
        initialContentTypes: action.payload['initialContentTypes'],
        selectedContentTypes: action.payload['selectedContentTypes'],
        eventTitleFieldName: action.payload['eventTitleFieldName'],
        msGraphClient: action.payload['msGraphClient']
      };
    }
    case 'SET_SELECTED_CONTENT_TYPES': {
      return {
        ...state,
        selectedContentTypes: action.payload
      };
    }
    case 'SET_EVENT_TITLE_FIELD_NAME': {
      return {
        ...state,
        eventTitleFieldName: action.payload
      };
    }
    case 'SET_MS_GRAPH_CLIENT': {
      return {
        ...state,
        msGraphClient: action.payload
      };
    }
    case 'SET_EVENT_MODAL': {
      return {
        ...state,
        eventExtendedProps: action.payload['eventExtendedProps'],
        isEventModalOpen: action.payload['isEventModalOpen']
      };
    }
    case 'SET_FILTER_PANEL': {
      return {
        ...state,
        isFilterPanelOpen: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
