import { IFilterOptionItem } from './IFilterOptionItem';

export interface IFilterPanelState {
  filterOptionItems: IFilterOptionItem[];
  selectedFilterOptionItems: string[];
  isLoading: boolean;
}
