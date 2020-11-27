import * as React from 'react';
import styles from './Calendars.module.scss';
import { ICalendarsProps } from './ICalendarsProps';
import AppContextProvider from '../hooks/useAppContext/AppContextProvider';
import App from './app/App';
import FilerPanel from './filter/FilterPanel';

const Calendars: React.FC<ICalendarsProps> = (props: ICalendarsProps) => {
  const selectedContentTypes: string[] = [];

  React.useEffect(() => {
    for (let contentType of props.contentTypes) {
      selectedContentTypes.push(contentType.contentTypeName);
    }
  }, [props.contentTypes]);

  return (
    <AppContextProvider contentTypes={props.contentTypes} selectedContenTypes={selectedContentTypes}>
      <App />
    </AppContextProvider>
  );
};

export default Calendars;
