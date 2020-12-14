import { MSGraphClient } from '@microsoft/sp-http';

export interface IAppContextProviderProps {
  contentTypes: any[];
  selectedContentTypes: string[];
  eventTitleFieldName: string;
  msGraphClient: MSGraphClient;
  children: React.ReactNode;
}
