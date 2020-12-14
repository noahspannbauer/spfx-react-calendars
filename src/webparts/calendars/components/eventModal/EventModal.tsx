import * as React from 'react';
import styles from './EventModal.module.scss';
import { useAppContext } from '../../hooks/useAppContext/UseAppContext';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { reducer, initialState } from './reducer';
import { IEventExtendedProps } from '../../models/IEventExtendedProps';
import { IEventDetails } from '../../models/IEventDetails';

const EventModal: React.FC<{}> = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const appContext = useAppContext();

  const onDismissEventModal = () => {
    appContext.dispatch({
      type: 'SET_EVENT_MODAL',
      payload: { eventExtendedProps: null, isEventModalOpen: false }
    });
  };

  React.useEffect(() => {
    const getEventDetails = async () => {
      const eventExtendedProps: IEventExtendedProps = appContext.state.eventExtendedProps;
      const response = await appContext.state.msGraphClient.api(`/sites/${eventExtendedProps.siteId}/lists/${eventExtendedProps.listId}/items/${eventExtendedProps.listItemId}?$expand=fields`).version('v1.0').get();
      console.log(response.fields)
      const gameDetails: IEventDetails = {
        gameDate: response.fields.StartDate ? response.fields.StartDate : '',
        teamName: response.fields.Title ? response.fields.Title : '',
        opponentTeamName: response.fields.Opponent ? response.fields.Opponent : '',
        location: response.fields.Location ? response.fields.Location : '',
        gameType: response.fields.GameType ? response.fields.GameType : '',
        gameStatus: response.fields.GameStatus ? response.fields.GameStatus : '',
        startTime: response.fields.StartDate ? response.fields.StartDate : '',
        endTime: response.fields.EndDate ? response.fields.EndDate : '',
        rescheduleDate: response.fields.RescheduleDate ? response.fields.RescheduleDate : '',
        homeTeamScore: response.fields.HomeTeamScore ? response.fields.HomeTeamScore : '',
        awayTeamScore: response.fields.AwayTeamScore ? response.fields.AwayTeamScore : '',
        gamePrimaryKey: response.fields.GamePK ? response.fields.GamePK : ''
      }

      dispatch({ type: 'SET_EVENT_DETAILS', payload: { eventDetails: gameDetails, isLoading: false }})
    }

    if (appContext.state.isEventModalOpen === true) {
      getEventDetails();
    }

  }, [appContext.state.isEventModalOpen])

  return (
    <Modal
      isOpen={appContext.state.isEventModalOpen}
      onDismiss={onDismissEventModal}
    >
      <div className={styles.eventModal}>
        {state.isLoading === true && (
          <div className={styles.grid}>
            <div className={styles.row}>
              <div className={`${styles.col} ${styles.sm12}`}>
                <Spinner size={SpinnerSize.large} label='Loading...' />
              </div>
            </div>
          </div>
        )}
        {state.isLoading === false && (
          <div className={styles.grid}>
            <div className={styles.row}>
              <div className={`${styles.col} ${styles.sm11}`}>
                <h3>Game Details</h3>
              </div>
              <div
                className={`${styles.col} ${styles.sm1} ${styles.cancelDialog}`}
              >
                <IconButton
                  iconProps={{
                    iconName: 'Cancel'
                  }}
                  onClick={onDismissEventModal}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={`${styles.col} ${styles.sm4}`}>
                <Label>Game Date:</Label>
              </div>
              <div className={`${styles.col} ${styles.sm8}`}>
                <TextField 
                  value={state.gameDate}
                  readOnly={true}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={`${styles.col} ${styles.sm4}`}>
                <Label>Team Name:</Label>
              </div>
              <div className={`${styles.col} ${styles.sm8}`}>
                <TextField 
                  value={state.teamName}
                  readOnly={true} 
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={`${styles.col} ${styles.sm4}`}>
                <Label>Opponent Team Name:</Label>
              </div>
              <div className={`${styles.col} ${styles.sm8}`}>
                <TextField 
                  value={state.opponentTeamName}
                  readOnly={true} 
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={`${styles.col} ${styles.sm4}`}>
                <Label>Location:</Label>
              </div>
              <div className={`${styles.col} ${styles.sm8}`}>
                <TextField 
                  value={state.location}
                  readOnly={true}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={`${styles.col} ${styles.sm4}`}>
                <Label>Game Type:</Label>
              </div>
              <div className={`${styles.col} ${styles.sm8}`}>
                <TextField 
                  value={state.gameType}
                  readOnly={true}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={`${styles.col} ${styles.sm4}`}>
                <Label>Game Status:</Label>
              </div>
              <div className={`${styles.col} ${styles.sm8}`}>
                <TextField 
                  value={state.gameStatus}
                  readOnly={true}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={`${styles.col} ${styles.sm4}`}>
                <Label>Start Time:</Label>
              </div>
              <div className={`${styles.col} ${styles.sm8}`}>
                <TextField 
                  value={state.startTime}
                  readOnly={true}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={`${styles.col} ${styles.sm4}`}>
                <Label>End Time:</Label>
              </div>
              <div className={`${styles.col} ${styles.sm8}`}>
                <TextField 
                  value={state.endTime}
                  readOnly={true}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={`${styles.col} ${styles.sm4}`}>
                <Label>Reschedule Date:</Label>
              </div>
              <div className={`${styles.col} ${styles.sm8}`}>
                <TextField 
                  value={state.rescheduleDate}
                  readOnly={true}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={`${styles.col} ${styles.sm4}`}>
                <Label>Home Team Score:</Label>
              </div>
              <div className={`${styles.col} ${styles.sm8}`}>
                <TextField 
                  value={state.homeTeamScore}
                  readOnly={true}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={`${styles.col} ${styles.sm4}`}>
                <Label>Away Team Score:</Label>
              </div>
              <div className={`${styles.col} ${styles.sm8}`}>
                <TextField 
                  value={state.awayTeamScore}
                  readOnly={true}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={`${styles.col} ${styles.sm4}`}>
                <Label>Game Primary Key:</Label>
              </div>
              <div className={`${styles.col} ${styles.sm8}`}>
                <TextField 
                  value={state.gamePrimaryKey}
                  readOnly={true}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default EventModal;
