import React from 'react';
import styles from './Calendars.module.scss';
import { ICalendarsProps } from './ICalendarsProps';
import AppContextProvider from '../context/appContext/AppContextProvider';
import App from '../components/app/app';

const Calendars: React.FC<ICalendarsProps> = (props: ICalendarsProps) => {
  return (
    <AppContextProvider msGraphClient={props.msGraphClient} contentTypeCategories={props.contentTypeCategories}>
      <App />
    </AppContextProvider>
  )
}

export default Calendars;
