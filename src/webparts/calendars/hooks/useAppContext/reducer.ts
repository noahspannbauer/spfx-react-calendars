import { IAppContextState } from '../../models/IAppContextState';
import { MSGraphClient } from '@microsoft/sp-http';

export type Action =
  | ['SET_INITIAL_CONTENT_TYPES', any[]]
  | ['SET_SELECTED_CONTENT_TYPES', any[]]
  | ['SET_EVENT_TITLE_FIELD_NAME', string]
  | ['SET_MS_GRAPH_CLIENT', MSGraphClient]
  | ['SET_FILTER_PANEL', boolean]
  | ['SET_EVENT_MODAL', boolean];

export const initialState: IAppContextState = {
  initialContentTypes: [],
  selectedContentTypes: [],
  eventTitleFieldName: '',
  msGraphClient: undefined,
  isFilterPanelOpen: false,
  isEventModalOpen: false
};

export const reducer = (
  state: any,
  [type, payload]: Action
): IAppContextState => {
  switch (type) {
    case 'SET_INITIAL_CONTENT_TYPES': {
      return {
        ...state,
        initialContentTypes: payload
      };
    }
    case 'SET_SELECTED_CONTENT_TYPES': {
      return {
        ...state,
        selectedContentTypes: payload
      };
    }
    case 'SET_EVENT_TITLE_FIELD_NAME': {
      return {
        ...state,
        eventTitleFieldName: payload
      };
    }
    case 'SET_MS_GRAPH_CLIENT': {
      return {
        ...state,
        msGraphClient: payload
      }
    }
    case 'SET_FILTER_PANEL': {
      return {
        ...state,
        isFilterPanelOpen: payload
      };
    }
    case 'SET_EVENT_MODAL': {
      return {
        ...state,
        isEventModalOpen: payload
      }
    }
    default: {
      return state;
    }
  }
};
