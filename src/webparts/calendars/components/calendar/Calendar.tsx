import * as React from 'react';
import { reducer, initialState } from './reducer';
import { useAppContext } from '../../hooks/useAppContext/UseAppContext';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { sp } from '@pnp/sp';
import '@pnp/sp/search';
import {
  ISearchResult,
  SearchQueryBuilder,
  SearchResults
} from '@pnp/sp/search';
import { IContentType } from '../../models/IContentType';

const Calendar: React.FC<{}> = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const appContext = useAppContext();

  const setDateRange = (dates: any) => {
    const startDate: Date = new Date(dates.startStr);
    const endDate: Date = new Date(dates.endStr);
    const startDateMonth: number = startDate.getMonth() + 1;
    const endDateMonth: number = endDate.getMonth() + 1;
    const startDateString: string = `${startDate.getFullYear()}-${(
      '0' + startDateMonth
    ).slice(-2)}-${('0' + startDate.getDate()).slice(-2)}`;
    const endDateString: string = `${endDate.getFullYear()}-${(
      '0' + endDateMonth
    ).slice(-2)}-${('0' + endDate.getDate()).slice(-2)}`;

    dispatch([
      'SET_DATE_RANGE',
      { startDate: startDateString, endDate: endDateString }
    ]);
  };

  const onEventClick = () => {
    console.log('blah')
    appContext.setEventModal();
  }

  const getEvents = async (
    contentTypeQueryString: string,
    startDate: string,
    endDate: string
  ): Promise<any[]> => {
    try {
      const queryText: string = `(${contentTypeQueryString}) AND CalendarsStartDate:${startDate}..${endDate}`;
      const query = SearchQueryBuilder()
        .text(queryText)
        .selectProperties(
          'ContentType',
          'Title',
          'Opponent',
          'CalendarsStartDate',
          'CalendarsEndDate',
          'ListItemID'
        )
        .rowLimit(500).trimDuplicates;
      const response: SearchResults = await sp.search(query);
      const events: any[] = response.PrimarySearchResults.map(
        (primarySearchResult: ISearchResult) => {
          const initialContentTypes: IContentType[] =
            appContext.state.initialContentTypes;
          const initialContentTypeIndex: number = initialContentTypes
            .map((initialContentType: IContentType) => {
              return initialContentType.contentTypeName;
            })
            .indexOf(primarySearchResult['ContentType']);

          return {
            title:
              appContext.state.eventTitleFieldName === 'Title'
                ? primarySearchResult.Title
                : primarySearchResult['Opponent'],
            start: new Date(primarySearchResult['CalendarsStartDate']),
            end: new Date(primarySearchResult['CalendarsEndDate']),
            backgroundColor:
              initialContentTypes[initialContentTypeIndex].eventColor,
            extendedProps: {
              siteId: primarySearchResult['SiteId'],
              listId: primarySearchResult['ListId'],
              listItemId: primarySearchResult['ListItemID']
            }
          };
        }
      );

      return Promise.resolve<any[]>(events);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  React.useEffect(() => {
    const getCalendarEvents = async () => {
      const events: any[] = await getEvents(
        state.contentTypesQueryString,
        state.startDate,
        state.endDate
      );

      dispatch(['SET_EVENTS', events]);
    };

    if (
      state.contentTypesQueryString !== '' &&
      state.startDate !== '' &&
      state.endDate !== ''
    ) {
      getCalendarEvents();
    }
  }, [state.contentTypesQueryString, state.startDate]);

  React.useEffect(() => {
    const getContentTypesQueryString = async () => {
      const selectedContentTypes = appContext.state.selectedContentTypes;
      let contentTypeQueryString: string = '';

      for (let i = 0; i < selectedContentTypes.length; i++) {
        contentTypeQueryString += `ContentType="${selectedContentTypes[i]}"`;

        if (selectedContentTypes.length > i + 1) {
          contentTypeQueryString += ' OR ';
        }
      }

      dispatch(['SET_CONTENT_TYPES_QUERY_STRING', contentTypeQueryString]);
    };

    if (appContext.state.selectedContentTypes.length > 0) {
      getContentTypesQueryString();
    }
  }, [appContext.state.selectedContentTypes]);

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView='dayGridMonth'
      events={state.events}
      datesSet={setDateRange}
      eventClick={onEventClick}
    />
  );
};

export default Calendar;
