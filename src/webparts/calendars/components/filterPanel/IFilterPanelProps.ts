import { IContentType } from '../../models/IContentType';

export interface IFilterPanelProps {
  contentTypes: IContentType[];
  selectedFilterOptionsItems: string[];
  isPanelOpen: boolean;
}
