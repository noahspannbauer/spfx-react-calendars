import { IEvent } from '../../models/IEvent';
import { IGame } from '../../models/IGame';

export interface ICalendarState {
  initialView: string;
  events: IEvent[];
  event: IGame;
  isEventPanelOpen: boolean;
  isLoading: boolean;
}
