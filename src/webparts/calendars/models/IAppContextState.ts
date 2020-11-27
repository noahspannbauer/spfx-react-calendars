import { IContentType } from './IContentType';

export interface IAppContextState {
  initialContentTypes: IContentType[];
  selectedContentTypes: string[];
  isFilterPanelOpen: boolean;
}
