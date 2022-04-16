import React, { useEffect, useReducer } from 'react';
import styles from './Calendar.module.scss';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import { useAppContext } from '../../hooks/appContext/UseAppContext';
import { IEvent } from '../../models/IEvent';
import { useQueryString } from '../../hooks/queryString/UseQueryString';
import { initialState, reducer } from './reducer';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { IGame } from '../../models/IGame';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { useUserSettings } from '../../hooks/userSettings/UseUserSettings';

const Calendar: React.FC<unknown> = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const appContext = useAppContext();
  const { initialView } = useUserSettings();
  const { queryString } = useQueryString(appContext.state.userFavorites, appContext.state.startDate, appContext.state.endDate);
  const { contentTypeSettings } = useUserSettings();

  const onOpenFilterPanel = () => {
    const isFilterPanelOpen = !appContext.state.isFilterPanelOpen;

    appContext.dispatch({ type: "SET_IS_FILTER_PANEL_OPEN", payload: isFilterPanelOpen });
  }

  const onOpenSettingsPanel = () => {
    appContext.dispatch({ type: 'SET_IS_SETTINGS_PANEL_OPEN', payload: !appContext.state.isSettingsPanelOpen })
  }

  const onDismissEventPanel = () => {
    dispatch({ type: 'SET_EVENT_PANEL_CLOSE', payload: { event: undefined, isEventPanelOpen: false } })
  }

  const EventPanel = () => {
    return (
        <Panel
          type={PanelType.medium}
          headerText='Event'
          isOpen={state.isEventPanelOpen}
          onDismiss={onDismissEventPanel}
        >
          <div className={styles.calendar}>
            {state.event &&
              <div className={styles.grid}>
                <div className={styles.row}>
                  <div className={`${styles.col} ${styles.sm12}`}>
                    <h2>{state.event.title}</h2>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={`${styles.col} ${styles.sm3}`}>
                    <Label>Home Team:</Label>
                  </div>
                  <div className={`${styles.col} ${styles.sm9} ${styles.eventPanelValue}`}>
                    {state.event.isHomeTeam}
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={`${styles.col} ${styles.sm3}`}>
                    <Label>Opponent:</Label>
                  </div>
                  <div className={`${styles.col} ${styles.sm9} ${styles.eventPanelValue}`}>
                    {state.event.opponent}
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={`${styles.col} ${styles.sm3}`}>
                    <Label>Location:</Label>
                  </div>
                  <div className={`${styles.col} ${styles.sm9} ${styles.eventPanelValue}`}>
                    {state.event.location}
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={`${styles.col} ${styles.sm3}`}>
                    <Label>Game Type:</Label>
                  </div>
                  <div className={`${styles.col} ${styles.sm9} ${styles.eventPanelValue}`}>
                    {state.event.gameType}
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={`${styles.col} ${styles.sm3}`}>
                    <Label>Game Status:</Label>
                  </div>
                  <div className={`${styles.col} ${styles.sm9} ${styles.eventPanelValue}`}>
                    {state.event.gameStatus}
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={`${styles.col} ${styles.sm3}`}>
                    <Label>Start Time:</Label>
                  </div>
                  <div className={`${styles.col} ${styles.sm9} ${styles.eventPanelValue}`}>
                    {state.event.startDate}
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={`${styles.col} ${styles.sm3}`}>
                    <Label>Reschedule Date:</Label>
                  </div>
                  <div className={`${styles.col} ${styles.sm9} ${styles.eventPanelValue}`}>
                    {state.event.rescheduleDate}
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={`${styles.col} ${styles.sm3}`}>
                    <Label>Home Team Score:</Label>
                  </div>
                  <div className={`${styles.col} ${styles.sm9} ${styles.eventPanelValue}`}>
                    {state.event.homeTeamScore}
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={`${styles.col} ${styles.sm3}`}>
                    <Label>Away Team Score:</Label>
                  </div>
                  <div className={`${styles.col} ${styles.sm9} ${styles.eventPanelValue}`}>
                    {state.event.awayTeamScore}
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={`${styles.col} ${styles.sm3}`}>
                    <Label>Game Primary Key:</Label>
                  </div>
                  <div className={`${styles.col} ${styles.sm9} ${styles.eventPanelValue}`}>
                    {state.event.gamePrimaryKey}
                  </div>
                </div>
              </div>
            }
            {!state.event &&
              <Spinner size={SpinnerSize.large} label='Retrieving event...' />
            }
          </div>
        </Panel>
      
    )
  }

  const LoadingModal = () => {
    return (
      <Modal
        isOpen={state.isLoading}
        isBlocking={true}
      >
        <Spinner size={SpinnerSize.large} label='Retrieving events...' />
      </Modal>
    )
  }

  const getEvents = async (): Promise<IEvent[]> => {
    let events: IEvent[] = [];

    try {
        const response: any = await appContext.state.msGraphClient.api('/search/query').post(
            {
                "requests": [
                    {
                        "entityTypes": [
                            "listItem"
                        ],
                        "query": {
                            "queryString": appContext.state.queryString
                        },
                        "fields": [
                            "sharepointIds",
                            "contenttypeid",
                            "contenttype",
                            "title",
                            "startdate",
                            "siteId"
                        ]
                    }
                ]
            }
        )
        const results: any[] = response.value[0].hitsContainers[0].hits;

        if (results) {
          events = results.map((result: any) => {
              const fields: any = result.resource.fields;
              const sharepointIds: any = result.resource.sharepointIds;
              const contentType = fields.contenttype;
              const filteredContentTypeSettings = contentTypeSettings.filter((contentTypeSetting) => {
                if (contentTypeSetting.contentTypeName === contentType) {
                  return contentTypeSetting;
                }
              })
              const startDate: Date = new Date(fields.startdate);
              const endDate: Date = new Date(startDate.setHours(startDate.getHours() + 4));
              const backgroundColor: string = filteredContentTypeSettings.length > 0 ? filteredContentTypeSettings[0].backgroundColor : '#3788d8';

              const   event: IEvent = {
                  title: fields.title,
                  start: fields.startdate,
                  end: endDate.toString(),
                  backgroundColor: backgroundColor,
                  borderColor: backgroundColor,
                  extendedProps: {
                      siteId: fields.siteId,
                      listId: sharepointIds.listId,
                      listItemId: sharepointIds.listItemId
                  }
              }

              return event;
          });
        }

        return Promise.resolve<IEvent[]>(events);
    } catch (error) {
        return Promise.reject(error);
    }
  }

  const getEvent = async (siteId: string, listId: string, listItemId: string) => {
    try {
      dispatch({ type: 'SET_EVENT_PANEL_OPEN', payload: true })

      const response: any = await appContext.state.msGraphClient.api(`/sites/${siteId}/lists/${listId}/items/${listItemId}`).expand('fields($select=Title,IsHomeTeam,Opponent,Location,GameType,GameStatus,StartDate,RescheduleDate,HomeTeamScore,AwayTeamScore,GamePK)').get();
      const fields: any = response.fields;
      const game: IGame = {
        title: fields.Title,
        isHomeTeam: fields.IsHomeTeam ? 'Yes' : 'No',
        opponent: fields.Opponent,
        location: fields.Location,
        gameType: fields.GameType,
        gameStatus: fields.GameStatus,
        startDate: new Date(fields.StartDate).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
        rescheduleDate: fields.RescheduleDate ? fields.RescheduleDate : '',
        homeTeamScore: fields.HomeTeamScore ? fields.HomeTeamScore : '',
        awayTeamScore: fields.AwayTeamScore? fields.AwayTeamScore : '',
        gamePrimaryKey: fields.GamePK
      }

      dispatch({ type: 'SET_EVENT', payload: game })
    } catch (error) {
      console.log(error);
    }
  }

  const onEvents = (info, onSuccess) => {
    if (appContext.state.startDate !== info.startStr) {
      appContext.dispatch({ type: 'SET_START_DATE', payload: info.startStr })
    }
    
    if (appContext.state.endDate !== info.endStr) {
      appContext.dispatch({ type: 'SET_END_DATE', payload: info.endStr })
    }

    onSuccess(state.events)
  }

  const onEventClick = (info) => {
    info.jsEvent.preventDefault();

    const extendedProps = info.event.extendedProps;
    
    getEvent(extendedProps.siteId, extendedProps.listId, extendedProps.listItemId)
  }

  useEffect(() => {
    appContext.dispatch({ type: 'SET_QUERY_STRING', payload: queryString })
  }, [queryString])

  useEffect(() => {
    const getNewEvents = async () => {
      try {
        const events: IEvent[] = await getEvents();

        dispatch({ type: 'SET_INITIAL_VIEW', payload: { initialView: initialView, events: events, isLoading: false }})
      } catch (error) {
        console.log(error);
      }
    }

    dispatch({ type: 'SET_IS_LOADING', payload: true })

    if (appContext.state.queryString !== '' && initialView) {
      getNewEvents()
    }
  }, [appContext.state.queryString, initialView])

  return (
    <React.Fragment>
      {state.initialView &&
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, ]}
          initialView={state.initialView}
          events={onEvents}
          eventClick={onEventClick}
          customButtons={{
            filterButton: {
              text: 'Filter',
              click: () => {
                onOpenFilterPanel()
              }
            },
            settingsButton: {
              text: 'Settings',
              click: () => {
                onOpenSettingsPanel()
              }
            }
          }}
          headerToolbar={{
            left: 'prev,next today dayGridMonth,timeGridWeek,timeGridDay',
            center: 'title',
            right: 'filterButton settingsButton'
          }}
        />
      }
      <EventPanel />
      <LoadingModal />
    </React.Fragment>
  )
}

export default Calendar;