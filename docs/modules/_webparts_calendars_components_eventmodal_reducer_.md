**[spfx-react-calendars](../README.md)**

> [Globals](../README.md) / "webparts/calendars/components/eventModal/reducer"

# Module: "webparts/calendars/components/eventModal/reducer"

## Index

### Type aliases

* [Action](_webparts_calendars_components_eventmodal_reducer_.md#action)

### Functions

* [reducer](_webparts_calendars_components_eventmodal_reducer_.md#reducer)

### Object literals

* [initialState](_webparts_calendars_components_eventmodal_reducer_.md#initialstate)

## Type aliases

### Action

Ƭ  **Action**: { payload: { eventDetails: [IEventDetails](../interfaces/_webparts_calendars_models_ieventdetails_.ieventdetails.md) ; isLoading: boolean  } ; type: \"SET\_EVENT\_DETAILS\"  } \| { payload: boolean ; type: \"SET\_IS\_LOADING\"  }

*Defined in [src/webparts/calendars/components/eventModal/reducer.ts:4](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/components/eventModal/reducer.ts#L4)*

## Functions

### reducer

▸ `Const`**reducer**(`state`: [IEventModalState](../interfaces/_webparts_calendars_components_eventmodal_ieventmodalstate_.ieventmodalstate.md), `action`: [Action](_webparts_calendars_components_eventmodal_reducer_.md#action)): [IEventModalState](../interfaces/_webparts_calendars_components_eventmodal_ieventmodalstate_.ieventmodalstate.md)

*Defined in [src/webparts/calendars/components/eventModal/reducer.ts:24](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/components/eventModal/reducer.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`state` | [IEventModalState](../interfaces/_webparts_calendars_components_eventmodal_ieventmodalstate_.ieventmodalstate.md) |
`action` | [Action](_webparts_calendars_components_eventmodal_reducer_.md#action) |

**Returns:** [IEventModalState](../interfaces/_webparts_calendars_components_eventmodal_ieventmodalstate_.ieventmodalstate.md)

## Object literals

### initialState

▪ `Const` **initialState**: object

*Defined in [src/webparts/calendars/components/eventModal/reducer.ts:8](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/components/eventModal/reducer.ts#L8)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`awayTeamScore` | string | "" |
`endTime` | string | "" |
`gameDate` | string | "" |
`gamePrimaryKey` | string | "" |
`gameStatus` | string | "" |
`gameType` | string | "" |
`homeTeamScore` | string | "" |
`isLoading` | true | true |
`location` | string | "" |
`opponentTeamName` | string | "" |
`rescheduleDate` | string | "" |
`startTime` | string | "" |
`teamName` | string | "" |
