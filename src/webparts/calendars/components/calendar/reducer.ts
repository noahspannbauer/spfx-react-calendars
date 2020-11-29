import { ICalendarState } from '../../models/ICalendarState';

export type Action =
  | ['SET_EVENTS', any[]]
  | ['SET_DATE_RANGE', { startDate: string; endDate: string }]
  | ['SET_CONTENT_TYPES_QUERY_STRING', string];

export const initialState: ICalendarState = {
  events: [],
  startDate: '',
  endDate: '',
  contentTypesQueryString: ''
};

export const reducer = (
  state: any,
  [type, payload]: Action
): ICalendarState => {
  switch (type) {
    case 'SET_EVENTS': {
      return {
        ...state,
        events: payload
      };
    }
    case 'SET_DATE_RANGE': {
      return {
        ...state,
        startDate: payload['startDate'],
        endDate: payload['endDate']
      };
    }
    case 'SET_CONTENT_TYPES_QUERY_STRING': {
      return {
        ...state,
        contentTypesQueryString: payload
      };
    }
    default: {
      return state;
    }
  }
};
