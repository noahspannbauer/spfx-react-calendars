**[spfx-react-calendars](../README.md)**

> [Globals](../README.md) / "webparts/calendars/hooks/useAppContext/reducer"

# Module: "webparts/calendars/hooks/useAppContext/reducer"

## Index

### Type aliases

* [Action](_webparts_calendars_hooks_useappcontext_reducer_.md#action)

### Functions

* [reducer](_webparts_calendars_hooks_useappcontext_reducer_.md#reducer)

### Object literals

* [initialState](_webparts_calendars_hooks_useappcontext_reducer_.md#initialstate)

## Type aliases

### Action

Ƭ  **Action**: { payload: { eventTitleFieldName: string ; initialContentTypes: any[] ; msGraphClient: MSGraphClient ; selectedContentTypes: any[]  } ; type: \"INITIAL\_LOAD\"  } \| { payload: any[] ; type: \"SET\_SELECTED\_CONTENT\_TYPES\"  } \| { payload: string ; type: \"SET\_EVENT\_TITLE\_FIELD\_NAME\"  } \| { payload: MSGraphClient ; type: \"SET\_MS\_GRAPH\_CLIENT\"  } \| { payload: { eventExtendedProps: [IEventExtendedProps](../interfaces/_webparts_calendars_models_ieventextendedprops_.ieventextendedprops.md) ; isEventModalOpen: boolean  } ; type: \"SET\_EVENT\_MODAL\"  } \| { payload: { isFilterPanelOpen: boolean ; selectedContentTypes: any[]  } ; type: \"APPLY\_FILTER\"  } \| { payload: boolean ; type: \"SET\_FILTER\_PANEL\"  }

*Defined in [src/webparts/calendars/hooks/useAppContext/reducer.ts:15](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/hooks/useAppContext/reducer.ts#L15)*

## Functions

### reducer

▸ `Const`**reducer**(`state`: [IAppContextState](../interfaces/_webparts_calendars_hooks_useappcontext_iappcontextstate_.iappcontextstate.md), `action`: [Action](_webparts_calendars_hooks_useappcontext_reducer_.md#action)): [IAppContextState](../interfaces/_webparts_calendars_hooks_useappcontext_iappcontextstate_.iappcontextstate.md)

*Defined in [src/webparts/calendars/hooks/useAppContext/reducer.ts:41](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/hooks/useAppContext/reducer.ts#L41)*

#### Parameters:

Name | Type |
------ | ------ |
`state` | [IAppContextState](../interfaces/_webparts_calendars_hooks_useappcontext_iappcontextstate_.iappcontextstate.md) |
`action` | [Action](_webparts_calendars_hooks_useappcontext_reducer_.md#action) |

**Returns:** [IAppContextState](../interfaces/_webparts_calendars_hooks_useappcontext_iappcontextstate_.iappcontextstate.md)

## Object literals

### initialState

▪ `Const` **initialState**: object

*Defined in [src/webparts/calendars/hooks/useAppContext/reducer.ts:5](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/hooks/useAppContext/reducer.ts#L5)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`eventExtendedProps` | null | null |
`eventTitleFieldName` | string | "" |
`initialContentTypes` | undefined[] | [] |
`isEventModalOpen` | false | false |
`isFilterPanelOpen` | false | false |
`msGraphClient` | undefined | undefined |
`selectedContentTypes` | undefined[] | [] |
