import { IFilterOptionItem } from '../../models/IFilterOptionItem';

export interface IFilterPanelState {
  filterOptionItems: IFilterOptionItem[];
  selectedFilterOptionItems: string[];
  isLoading: boolean;
}
