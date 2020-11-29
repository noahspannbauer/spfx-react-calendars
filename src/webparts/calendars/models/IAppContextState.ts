import { IContentType } from './IContentType';
import { MSGraphClient } from '@microsoft/sp-http';

export interface IAppContextState {
  initialContentTypes: IContentType[];
  selectedContentTypes: string[];
  eventTitleFieldName: string;
  msGraphClient: MSGraphClient;
  isFilterPanelOpen: boolean;
  isEventModalOpen: boolean;
}
