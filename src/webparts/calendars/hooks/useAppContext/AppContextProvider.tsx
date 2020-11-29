import * as React from 'react';
import { IAppContextProviderProps } from '../../models/IAppContextProviderProps';
import { IAppContextProps } from '../../models/IAppContextProps';
import { reducer, initialState } from './reducer';
import AppContext from './AppContext';

const AppContextProvider: React.FC<IAppContextProviderProps> = (
  props: IAppContextProviderProps
) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const contextValue: IAppContextProps = React.useMemo(() => {
    const contentTypes = props.contentTypes;
    const selectedContentTypes = props.selectedContentTypes;
    const eventTitleFieldName = props.eventTitleFieldName;

    return {
      contentTypes,
      selectedContentTypes,
      eventTitleFieldName,
      state,
      dispatch
    };
  }, [
    props.contentTypes,
    props.selectedContentTypes,
    props.eventTitleFieldName,
    state,
    dispatch
  ]);

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
