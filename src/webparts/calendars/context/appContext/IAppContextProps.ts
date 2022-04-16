import React from 'react';
import { IAppContextState } from './IAppContextState';
import { Action } from './reducer';

export interface IAppContextProps {
  state: IAppContextState;
  dispatch: React.Dispatch<Action>;
}
