import { IFilterOptionItem } from '../../models/IFilterOptionItem';
import { IFilterPanelState } from '../../models/IFilterPanelState';

export type Action =
  | [
      'SET_INITIAL_FILTER_OPTION_ITEMS',
      {
        filterOptionItems: IFilterOptionItem[];
        selectedFilterOptionItems: string[];
        isLoading: boolean;
      }
    ]
    | ['SET_FILTER_OPTION_ITEMS', IFilterOptionItem[]]
  | ['SET_SELECTED_FILTER_OPTION_ITEMS', string[]];

export const initialState: IFilterPanelState = {
  filterOptionItems: [],
  selectedFilterOptionItems: [],
  isLoading: true
};

export const reducer = (
  state,
  [type, payload]: Action
): IFilterPanelState => {
  switch (type) {
    case 'SET_INITIAL_FILTER_OPTION_ITEMS': {
      return {
        ...state,
        filterOptionItems: payload['filterOptionItems'],
        selectedFilterOptionItems: payload['selectedFilterOptionItems'],
        isLoading: payload['isLoading']
      };
    }
    case 'SET_FILTER_OPTION_ITEMS': {
        return {
            ...state,
            filterOptionItems: payload
        }
    }
    case 'SET_SELECTED_FILTER_OPTION_ITEMS': {
        return {
            ...state,
            selectedFilterOptionItems: payload
        }
    }
    default: {
      return state;
    }
  }
};
