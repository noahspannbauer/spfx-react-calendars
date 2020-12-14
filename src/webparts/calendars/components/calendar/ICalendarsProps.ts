import { MSGraphClient } from '@microsoft/sp-http';

export interface ICalendarsProps {
  contentTypes: any[];
  eventTitleFieldName: string;
  msGraphClient: MSGraphClient;
}
