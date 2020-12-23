**[spfx-react-calendars](../README.md)**

> [Globals](../README.md) / "webparts/calendars/components/filterPanel/reducer"

# Module: "webparts/calendars/components/filterPanel/reducer"

## Index

### Type aliases

* [Action](_webparts_calendars_components_filterpanel_reducer_.md#action)

### Functions

* [reducer](_webparts_calendars_components_filterpanel_reducer_.md#reducer)

### Object literals

* [initialState](_webparts_calendars_components_filterpanel_reducer_.md#initialstate)

## Type aliases

### Action

Ƭ  **Action**: [\"SET\_INITIAL\_FILTER\_OPTION\_ITEMS\", { filterOptionItems: [IFilterOptionItem](../interfaces/_webparts_calendars_models_ifilteroptionitem_.ifilteroptionitem.md)[] ; isLoading: boolean ; selectedFilterOptionItems: string[]  }] \| [\"SET\_FILTER\_OPTION\_ITEMS\", [IFilterOptionItem](../interfaces/_webparts_calendars_models_ifilteroptionitem_.ifilteroptionitem.md)[]] \| [\"SET\_SELECTED\_FILTER\_OPTION\_ITEMS\", string[]]

*Defined in [src/webparts/calendars/components/filterPanel/reducer.ts:4](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/components/filterPanel/reducer.ts#L4)*

## Functions

### reducer

▸ `Const`**reducer**(`state`: any, `__namedParameters`: [\"SET\_INITIAL\_FILTER\_OPTION\_ITEMS\" \| \"SET\_FILTER\_OPTION\_ITEMS\" \| \"SET\_SELECTED\_FILTER\_OPTION\_ITEMS\", string[] \| [IFilterOptionItem](../interfaces/_webparts_calendars_models_ifilteroptionitem_.ifilteroptionitem.md)[] \| { filterOptionItems: [IFilterOptionItem](../interfaces/_webparts_calendars_models_ifilteroptionitem_.ifilteroptionitem.md)[] ; isLoading: boolean ; selectedFilterOptionItems: string[]  }]): [IFilterPanelState](../interfaces/_webparts_calendars_components_filterpanel_ifilterpanelstate_.ifilterpanelstate.md)

*Defined in [src/webparts/calendars/components/filterPanel/reducer.ts:22](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/components/filterPanel/reducer.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`state` | any |
`__namedParameters` | [\"SET\_INITIAL\_FILTER\_OPTION\_ITEMS\" \| \"SET\_FILTER\_OPTION\_ITEMS\" \| \"SET\_SELECTED\_FILTER\_OPTION\_ITEMS\", string[] \| [IFilterOptionItem](../interfaces/_webparts_calendars_models_ifilteroptionitem_.ifilteroptionitem.md)[] \| { filterOptionItems: [IFilterOptionItem](../interfaces/_webparts_calendars_models_ifilteroptionitem_.ifilteroptionitem.md)[] ; isLoading: boolean ; selectedFilterOptionItems: string[]  }] |

**Returns:** [IFilterPanelState](../interfaces/_webparts_calendars_components_filterpanel_ifilterpanelstate_.ifilterpanelstate.md)

## Object literals

### initialState

▪ `Const` **initialState**: object

*Defined in [src/webparts/calendars/components/filterPanel/reducer.ts:16](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/components/filterPanel/reducer.ts#L16)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`filterOptionItems` | undefined[] | [] |
`isLoading` | true | true |
`selectedFilterOptionItems` | undefined[] | [] |
