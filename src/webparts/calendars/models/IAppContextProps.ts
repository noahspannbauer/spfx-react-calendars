import { IAppContextState } from '../models/IAppContextState';
import { Action } from '../hooks/useAppContext/reducer';

export interface IAppContextProps {
    contentTypes: any[];
    state: IAppContextState;
    dispatch: React.Dispatch<Action>
}