import { IAppContextState } from '../models/IAppContextState';
import { Action } from '../hooks/useAppContext/reducer';

export interface IAppContextProps {
  contentTypes: any[];
  selectedContentTypes: string[];
  state: IAppContextState;
  dispatch: React.Dispatch<Action>;
}
