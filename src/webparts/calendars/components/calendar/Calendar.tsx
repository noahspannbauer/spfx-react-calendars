import * as React from 'react';
import { useAppContext } from '../../hooks/useAppContext/UseAppContext';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { sp } from '@pnp/sp';
import '@pnp/sp/search';
import { ISearchQuery, SearchQueryBuilder } from '@pnp/sp/search';

const Calendar: React.FC<{}> = () => {
  const appContext = useAppContext();
  let searchResults;

  React.useEffect(() => {
    if (appContext.state.selectedContentTypes.length > 0) {
      let query = SearchQueryBuilder()
        .text('ContentType="Minnesota Twins Game"')
        .selectProperties(
          'ContentType',
          'Title',
          'StartDate',
          'StartDateOWSDATE',
          'EndDateOWSDATE',
          'AllDayEvent',
          'Path'
        )
        .rowLimit(500).trimDuplicates;

      sp.search(query).then((response) => {
        console.log(response.PrimarySearchResults);
      });

      // console.log(searchResults);
    }
  }, [appContext.state.selectedContentTypes]);

  return <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' />;
};

export default Calendar;
