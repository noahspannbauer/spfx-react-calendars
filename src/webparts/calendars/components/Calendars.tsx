import * as React from 'react';
import styles from './Calendars.module.scss';
import { ICalendarsProps } from './ICalendarsProps';
import AppContextProvider from '../hooks/useAppContext/AppContextProvider';
import Calendar from './calendar/Calendar';

const Calendars: React.FC<ICalendarsProps> = (props: ICalendarsProps) => {
  return (
    <AppContextProvider contentTypes={props.contentTypes}>
      <Calendar />
    </AppContextProvider>
  );
};

export default Calendars;
