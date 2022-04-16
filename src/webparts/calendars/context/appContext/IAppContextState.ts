import { MSGraphClient } from '@microsoft/sp-http';

export interface IAppContextState {
  msGraphClient: MSGraphClient;
  contentTypeCategories: any[];
  userFavorites: any[];
  queryString: string;
  startDate: string;
  endDate: string;
  isFilterPanelOpen: boolean;
  isSettingsPanelOpen: boolean;
  isPopupHidden: boolean;
}
