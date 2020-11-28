import { IAppContextState } from '../../models/IAppContextState';

export type Action =
  | ['SET_INITIAL_CONTENT_TYPES', any[]]
  | ['SET_SELECTED_CONTENT_TYPES', any[]]
  | ['SET_EVENT_TITLE_FIELD_NAME', string]
  | ['SET_FILTER_PANEL', boolean];

export const initialState: IAppContextState = {
  initialContentTypes: [],
  selectedContentTypes: [],
  eventTitleFieldName: '',
  isFilterPanelOpen: false
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
    case 'SET_FILTER_PANEL': {
      return {
        ...state,
        isFilterPanelOpen: payload
      };
    }
    default: {
      return state;
    }
  }
};
