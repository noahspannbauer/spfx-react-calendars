import * as React from 'react';
import styles from './Calendars.module.scss';
import { ICalendarsProps } from '../models/ICalendarsProps';
import AppContextProvider from '../hooks/useAppContext/AppContextProvider';
import App from './app/App';

const Calendars: React.FC<ICalendarsProps> = (props: ICalendarsProps) => {
  const selectedContentTypes: string[] = [];

  React.useEffect(() => {
    if (props.contentTypes !== undefined && props.contentTypes.length > 0) {
      for (let contentType of props.contentTypes) {
        selectedContentTypes.push(contentType.contentTypeName);
      }
    }
  }, [props.contentTypes]);

  return (
    <AppContextProvider
      contentTypes={props.contentTypes}
      selectedContentTypes={selectedContentTypes}
      eventTitleFieldName={props.eventTitleFieldName}
      msGraphClient={props.msGraphClient}
    >
      <App />
    </AppContextProvider>
  );
};

export default Calendars;
