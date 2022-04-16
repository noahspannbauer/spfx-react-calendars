import { MSGraphClient } from '@microsoft/sp-http';
import { PageContext } from '@microsoft/sp-page-context';

export interface ICalendarsProps {
  msGraphClient: MSGraphClient;
  contentTypeCategories: any[];
}
