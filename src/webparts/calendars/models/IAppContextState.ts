import { IContentType } from './IContentType';

export interface IAppContextState {
  initialContentTypes: IContentType[];
  selectedContentTypes: string[];
  eventTitleFieldName: string;
  isFilterPanelOpen: boolean;
}
