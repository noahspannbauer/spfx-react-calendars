import { IEventDetails } from '../../models/IEventDetails';
import { IEventModalState } from './IEventModalState';

export type Action = 
    | { type: 'SET_EVENT_DETAILS'; payload: { eventDetails: IEventDetails, isLoading: boolean}}
    | { type: 'SET_IS_LOADING'; payload: boolean };

export const initialState: IEventModalState = {
  gameDate: '',
  teamName: '',
  opponentTeamName: '',
  location: '',
  gameType: '',
  gameStatus: '',
  startTime: '',
  endTime: '',
  rescheduleDate: '',
  homeTeamScore: '',
  awayTeamScore: '',
  gamePrimaryKey: '',
  isLoading: true
};

export const reducer = (
  state: IEventModalState,
  action: Action
): IEventModalState => {
  switch (action.type) {
    case 'SET_EVENT_DETAILS': {
        return {
            ...state,
            gameDate: action.payload.eventDetails.gameDate,
            teamName: action.payload.eventDetails.teamName,
            opponentTeamName: action.payload.eventDetails.opponentTeamName,
            location: action.payload.eventDetails.location,
            gameType: action.payload.eventDetails.gameType,
            gameStatus: action.payload.eventDetails.gameStatus,
            startTime: action.payload.eventDetails.startTime,
            endTime: action.payload.eventDetails.endTime,
            rescheduleDate: action.payload.eventDetails.rescheduleDate,
            homeTeamScore: action.payload.eventDetails.homeTeamScore,
            awayTeamScore: action.payload.eventDetails.awayTeamScore,
            gamePrimaryKey: action.payload.eventDetails.gamePrimaryKey,
            isLoading: action.payload.isLoading
        }
    }
    case 'SET_IS_LOADING': {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
