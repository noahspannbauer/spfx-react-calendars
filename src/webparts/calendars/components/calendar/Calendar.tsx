import * as React from 'react';
import { useAppContext } from '../../hooks/useAppContext/UseAppContext';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar: React.FC<{}> = () => {
  const appContext = useAppContext();

  return <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' />;
};

export default Calendar;
