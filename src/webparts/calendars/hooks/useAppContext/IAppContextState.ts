import { IContentType } from '../../models/IContentType';
import { MSGraphClient } from '@microsoft/sp-http';
import { IEventExtendedProps } from '../../models/IEventExtendedProps';

export interface IAppContextState {
  initialContentTypes: IContentType[];
  selectedContentTypes: string[];
  eventTitleFieldName: string;
  msGraphClient: MSGraphClient;
  eventExtendedProps: IEventExtendedProps;
  isEventModalOpen: boolean;
  isFilterPanelOpen: boolean;
}
