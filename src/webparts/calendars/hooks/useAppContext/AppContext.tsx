import * as React from 'react';
import { IAppContextProps } from '../../models/IAppContextProps';

export const AppContext: React.Context<IAppContextProps> = React.createContext<IAppContextProps>(undefined);