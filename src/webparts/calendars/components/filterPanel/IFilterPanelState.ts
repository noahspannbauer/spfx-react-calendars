import { IFilter } from '../../models/IFilter';
import { IPopupProps } from '../popup/IPopupProps';

export interface IFilterPanelState {
  filters: IFilter[];
  selectedFilters: string[];
  isLoading: boolean;
  popUp: IPopupProps;
}
