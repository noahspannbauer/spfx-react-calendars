export interface IGame {
  title: string;
  isHomeTeam: string;
  opponent: string;
  location: string;
  gameType: string;
  gameStatus: string;
  startDate: string;
  rescheduleDate?: string;
  homeTeamScore?: string;
  awayTeamScore?: string;
  gamePrimaryKey: string;
}
