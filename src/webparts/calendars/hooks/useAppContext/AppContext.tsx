import * as React from 'react';
import { IAppContextProps } from '../../models/IAppContextProps';

const AppContext: React.Context<IAppContextProps> = React.createContext<IAppContextProps>(
  undefined
);

export default AppContext;
