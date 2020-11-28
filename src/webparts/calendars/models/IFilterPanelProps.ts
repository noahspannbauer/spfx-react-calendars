import { IContentType } from './IContentType';

export interface IFilterPanelProps {
  contentTypes: IContentType[];
  selectedFilterOptionsItems: string[];
  isPanelOpen: boolean;
}
