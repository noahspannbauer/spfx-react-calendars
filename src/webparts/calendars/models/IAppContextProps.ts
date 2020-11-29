import { IAppContextState } from '../models/IAppContextState';
import { MSGraphClient } from '@microsoft/sp-http';
import { Action } from '../hooks/useAppContext/reducer';

export interface IAppContextProps {
  contentTypes: any[];
  selectedContentTypes: string[];
  eventTitleFieldName: string;
  msGraphClient: MSGraphClient;
  state: IAppContextState;
  dispatch: React.Dispatch<Action>;
}
