import { IEvent } from '../../models/IEvent';
import { IGame } from '../../models/IGame';
import { ICalendarState } from './ICalendarState';

export type Action = 
  | { type: 'SET_INITIAL_VIEW'; payload: { initialView: string, events: IEvent[], isLoading: boolean } }
  | { type: 'SET_EVENT'; payload: IGame }
  | { type: 'SET_EVENT_PANEL_OPEN'; payload: boolean }
  | { type: 'SET_EVENT_PANEL_CLOSE'; payload: { event: IGame, isEventPanelOpen: boolean }}
  | { type: 'SET_IS_LOADING'; payload: boolean }

export const initialState: ICalendarState = {
  initialView: undefined,
  events: [],
  event: undefined,
  isEventPanelOpen: false,
  isLoading: false
};

export const reducer = (
  state: ICalendarState,
  action: Action
): ICalendarState => {
  switch (action.type) {
    case 'SET_INITIAL_VIEW': {
      return {
        ...state,
        initialView: action.payload.initialView,
        events: action.payload.events,
        isLoading: action.payload.isLoading
      }
    }
    case 'SET_EVENT': {
      return {
        ...state,
        event: action.payload
      }
    }
    case 'SET_EVENT_PANEL_OPEN': {
      return {
        ...state,
        isEventPanelOpen: action.payload
      }
    }
    case 'SET_EVENT_PANEL_CLOSE': {
      return {
        ...state,
        event: action.payload.event,
        isEventPanelOpen: action.payload.isEventPanelOpen
      }
    }
    case 'SET_IS_LOADING': {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    default: {
      return state
    }
  }
};
