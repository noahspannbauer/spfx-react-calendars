import { IFilter } from '../../models/IFilter';
import { IPopupProps } from '../popup/IPopupProps';
import { IFilterPanelState } from './IFilterPanelState';

export type Action =
  | { type: 'SET_FILTERS'; payload: { filters: IFilter[]; selectedFilters: string[]; isLoading: boolean } }
  | { type: 'SET_IS_LOADING'; payload: boolean }
  | { type: 'SET_POPUP'; payload: IPopupProps };

export const initialState: IFilterPanelState = {
  filters: [],
  selectedFilters: [],
  isLoading: true,
  popUp: undefined
};

export const reducer = (
  state: IFilterPanelState,
  action: Action
): IFilterPanelState => {
  switch (action.type) {
    case 'SET_FILTERS': {
      return {
        ...state,
        filters: action.payload.filters,
        selectedFilters: action.payload.selectedFilters,
        isLoading: action.payload.isLoading
      };
    }
    case 'SET_IS_LOADING': {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case 'SET_POPUP': {
      return {
        ...state,
        popUp: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
