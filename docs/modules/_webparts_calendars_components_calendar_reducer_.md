**[spfx-react-calendars](../README.md)**

> [Globals](../README.md) / "webparts/calendars/components/calendar/reducer"

# Module: "webparts/calendars/components/calendar/reducer"

## Index

### Type aliases

* [Action](_webparts_calendars_components_calendar_reducer_.md#action)

### Functions

* [reducer](_webparts_calendars_components_calendar_reducer_.md#reducer)

### Object literals

* [initialState](_webparts_calendars_components_calendar_reducer_.md#initialstate)

## Type aliases

### Action

Ƭ  **Action**: [\"SET\_EVENTS\", any[]] \| [\"SET\_DATE\_RANGE\", { endDate: string ; startDate: string  }] \| [\"SET\_CONTENT\_TYPES\_QUERY\_STRING\", string]

*Defined in [src/webparts/calendars/components/calendar/reducer.ts:3](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/components/calendar/reducer.ts#L3)*

## Functions

### reducer

▸ `Const`**reducer**(`state`: any, `__namedParameters`: [\"SET\_EVENTS\" \| \"SET\_DATE\_RANGE\" \| \"SET\_CONTENT\_TYPES\_QUERY\_STRING\", string \| any[] \| { endDate: string ; startDate: string  }]): [ICalendarState](../interfaces/_webparts_calendars_components_calendar_icalendarstate_.icalendarstate.md)

*Defined in [src/webparts/calendars/components/calendar/reducer.ts:15](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/components/calendar/reducer.ts#L15)*

#### Parameters:

Name | Type |
------ | ------ |
`state` | any |
`__namedParameters` | [\"SET\_EVENTS\" \| \"SET\_DATE\_RANGE\" \| \"SET\_CONTENT\_TYPES\_QUERY\_STRING\", string \| any[] \| { endDate: string ; startDate: string  }] |

**Returns:** [ICalendarState](../interfaces/_webparts_calendars_components_calendar_icalendarstate_.icalendarstate.md)

## Object literals

### initialState

▪ `Const` **initialState**: object

*Defined in [src/webparts/calendars/components/calendar/reducer.ts:8](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/components/calendar/reducer.ts#L8)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`contentTypesQueryString` | string | "" |
`endDate` | string | "" |
`events` | undefined[] | [] |
`startDate` | string | "" |
