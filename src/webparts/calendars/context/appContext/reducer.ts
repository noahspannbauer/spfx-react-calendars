import { IAppContextState } from './IAppContextState';
import { MSGraphClient } from '@microsoft/sp-http';

export type Action =
  | {
      type: 'SET_GLOBAL_PROPS';
      payload: { msGraphClient: MSGraphClient; contentTypeCategories: any[] };
    }
  | { type: 'SET_USER_FAVORITES'; payload: string[] }
  | { type: 'SET_QUERY_STRING'; payload: string }
  | { type: 'SET_START_DATE'; payload: string }
  | { type: 'SET_END_DATE'; payload: string }
  | { type: 'SET_IS_FILTER_PANEL_OPEN'; payload: boolean }
  | { type: 'SET_IS_SETTINGS_PANEL_OPEN'; payload: boolean }
  | { type: 'SET_IS_POPUP_HIDDEN'; payload: boolean };

export const reducer = (
  state: IAppContextState,
  action: Action
): IAppContextState => {
  switch (action.type) {
    case 'SET_GLOBAL_PROPS': {
      return {
        ...state,
        msGraphClient: action.payload.msGraphClient,
        contentTypeCategories: action.payload.contentTypeCategories
      };
    }
    case 'SET_USER_FAVORITES': {
      return {
        ...state,
        userFavorites: action.payload
      };
    }
    case 'SET_QUERY_STRING': {
      return {
        ...state,
        queryString: action.payload
      }
    }
    case 'SET_START_DATE': {
      return {
        ...state,
        startDate: action.payload
      }
    }
    case 'SET_END_DATE': {
      return {
        ...state,
        endDate: action.payload
      }
    }
    case 'SET_IS_FILTER_PANEL_OPEN': {
      return {
        ...state,
        isFilterPanelOpen: action.payload
      };
    }
    case 'SET_IS_SETTINGS_PANEL_OPEN': {
      return {
        ...state,
        isSettingsPanelOpen: action.payload
      }
    }
    case 'SET_IS_POPUP_HIDDEN': {
      return {
        ...state,
        isPopupHidden: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
