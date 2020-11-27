import * as React from 'react';
import { IAppContextProviderProps } from '../../models/IAppContextProviderProps';
import { IAppContextProps } from '../../models/IAppContextProps';
import { AppContext } from './AppContext';
import { reducer, initialState } from './reducer';

const AppContextProvider: React.FC<IAppContextProviderProps> = (
  props: IAppContextProviderProps
) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const contextValue: IAppContextProps = React.useMemo(() => {
    const contentTypes = props.contentTypes;
    const selectedContentTypes = props.selectedContenTypes

    return { contentTypes, selectedContentTypes, state, dispatch };
  }, [props.contentTypes, props.selectedContenTypes, state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
