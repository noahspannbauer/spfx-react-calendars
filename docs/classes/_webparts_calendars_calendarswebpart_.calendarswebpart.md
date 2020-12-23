**[spfx-react-calendars](../README.md)**

> [Globals](../README.md) / ["webparts/calendars/CalendarsWebPart"](../modules/_webparts_calendars_calendarswebpart_.md) / CalendarsWebPart

# Class: CalendarsWebPart

## Hierarchy

* BaseClientSideWebPart<[ICalendarsWebPartProps](../interfaces/_webparts_calendars_icalendarswebpartprops_.icalendarswebpartprops.md)\>

  ↳ **CalendarsWebPart**

## Implements

* ISPEventObserver
* any

## Index

### Constructors

* [constructor](_webparts_calendars_calendarswebpart_.calendarswebpart.md#constructor)

### Properties

* [accessibleTitle](_webparts_calendars_calendarswebpart_.calendarswebpart.md#accessibletitle)
* [canOpenPopupOnRender](_webparts_calendars_calendarswebpart_.calendarswebpart.md#canopenpopuponrender)
* [componentId](_webparts_calendars_calendarswebpart_.calendarswebpart.md#componentid)
* [context](_webparts_calendars_calendarswebpart_.calendarswebpart.md#context)
* [description](_webparts_calendars_calendarswebpart_.calendarswebpart.md#description)
* [disableReactivePropertyChanges](_webparts_calendars_calendarswebpart_.calendarswebpart.md#disablereactivepropertychanges)
* [displayMode](_webparts_calendars_calendarswebpart_.calendarswebpart.md#displaymode)
* [domElement](_webparts_calendars_calendarswebpart_.calendarswebpart.md#domelement)
* [instanceId](_webparts_calendars_calendarswebpart_.calendarswebpart.md#instanceid)
* [isDisposed](_webparts_calendars_calendarswebpart_.calendarswebpart.md#isdisposed)
* [isRenderAsync](_webparts_calendars_calendarswebpart_.calendarswebpart.md#isrenderasync)
* [manifest](_webparts_calendars_calendarswebpart_.calendarswebpart.md#manifest)
* [msGraphClient](_webparts_calendars_calendarswebpart_.calendarswebpart.md#msgraphclient)
* [previewImageUrl](_webparts_calendars_calendarswebpart_.calendarswebpart.md#previewimageurl)
* [properties](_webparts_calendars_calendarswebpart_.calendarswebpart.md#properties)
* [propertiesMetadata](_webparts_calendars_calendarswebpart_.calendarswebpart.md#propertiesmetadata)
* [renderedFromPersistedData](_webparts_calendars_calendarswebpart_.calendarswebpart.md#renderedfrompersisteddata)
* [renderedOnce](_webparts_calendars_calendarswebpart_.calendarswebpart.md#renderedonce)
* [title](_webparts_calendars_calendarswebpart_.calendarswebpart.md#title)

### Accessors

* [dataVersion](_webparts_calendars_calendarswebpart_.calendarswebpart.md#dataversion)

### Methods

* [clearError](_webparts_calendars_calendarswebpart_.calendarswebpart.md#clearerror)
* [dispose](_webparts_calendars_calendarswebpart_.calendarswebpart.md#dispose)
* [getPropertyPaneConfiguration](_webparts_calendars_calendarswebpart_.calendarswebpart.md#getpropertypaneconfiguration)
* [onAfterDeserialize](_webparts_calendars_calendarswebpart_.calendarswebpart.md#onafterdeserialize)
* [onAfterPropertyPaneChangesApplied](_webparts_calendars_calendarswebpart_.calendarswebpart.md#onafterpropertypanechangesapplied)
* [onBeforeSerialize](_webparts_calendars_calendarswebpart_.calendarswebpart.md#onbeforeserialize)
* [onDisplayModeChanged](_webparts_calendars_calendarswebpart_.calendarswebpart.md#ondisplaymodechanged)
* [onDispose](_webparts_calendars_calendarswebpart_.calendarswebpart.md#ondispose)
* [onInit](_webparts_calendars_calendarswebpart_.calendarswebpart.md#oninit)
* [onPropertyPaneConfigurationComplete](_webparts_calendars_calendarswebpart_.calendarswebpart.md#onpropertypaneconfigurationcomplete)
* [onPropertyPaneConfigurationStart](_webparts_calendars_calendarswebpart_.calendarswebpart.md#onpropertypaneconfigurationstart)
* [onPropertyPaneFieldChanged](_webparts_calendars_calendarswebpart_.calendarswebpart.md#onpropertypanefieldchanged)
* [onPropertyPaneRendered](_webparts_calendars_calendarswebpart_.calendarswebpart.md#onpropertypanerendered)
* [render](_webparts_calendars_calendarswebpart_.calendarswebpart.md#render)
* [renderCompleted](_webparts_calendars_calendarswebpart_.calendarswebpart.md#rendercompleted)
* [renderError](_webparts_calendars_calendarswebpart_.calendarswebpart.md#rendererror)

## Constructors

### constructor

\+ **new CalendarsWebPart**(): [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md)

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[constructor](_webparts_calendars_calendarswebpart_.calendarswebpart.md#constructor)*

*Overrides void*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:82*

Constructor for the BaseClientSideWebPart class.

**`remarks`** 
It is highly recommended that the web part use the `onInit()` API to perform any web part specific
initialization.  Most of the web part features like this.context and `this.properties` are not
available to be used before the the `onInit()` part of the web part loading lifecycle.

**Returns:** [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md)

## Properties

### accessibleTitle

• `Protected` `Readonly` **accessibleTitle**: string

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[accessibleTitle](_webparts_calendars_calendarswebpart_.calendarswebpart.md#accessibletitle)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:334*

This property points to the accessible title of web part made available to screen readers. The base implementation
returns that default title in the manifest. Web parts that want to provide more descriptive title containing
contextual information need to override this API.

___

### canOpenPopupOnRender

• `Protected` `Readonly` **canOpenPopupOnRender**: boolean

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[canOpenPopupOnRender](_webparts_calendars_calendarswebpart_.calendarswebpart.md#canopenpopuponrender)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:133*

This property indicates whether a web part can open a popup on initial render.

**`remarks`** 
In some environments the host
re-renders the web parts frequently, and therefore opening popups during render will cause popups to open
repeatedly, which is a poor user experience. As an example, the classic SharePoint pages perform postbacks
causing the page to re-render on all button clicks.

If a web part needs to open a popup on render, it should use this API before opening the popup. If this API
returns false, the web part should not open popup on initial render. Some web parts that open popups during
render are the document embed web part that pops up the file picker on initial render, embedded video web part
that pops up the PropertyPane on initial render.

**`readonly`** 

___

### componentId

• `Readonly` **componentId**: string

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[componentId](_webparts_calendars_calendarswebpart_.calendarswebpart.md#componentid)*

*Defined in node_modules/@microsoft/sp-component-base/dist/index-internal.d.ts:102*

Returns the component identifier as defined in the component’s associated manifest.

**`remarks`** 
Each client-side component has an associated manifest that is used by the sp-loader to load its scripts,
and which may include additional metadata about the component.  The manifest is uniquely identified using
a text string containing a lower case GUID value.

___

### context

• `Readonly` **context**: WebPartContext

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[context](_webparts_calendars_calendarswebpart_.calendarswebpart.md#context)*

*Overrides void*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:52*

{@inheritDoc @microsoft/sp-component-base#BaseComponent.context}

___

### description

• `Protected` `Readonly` **description**: string

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[description](_webparts_calendars_calendarswebpart_.calendarswebpart.md#description)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:347*

Description of the WebPart

**`readonly`** 

___

### disableReactivePropertyChanges

• `Protected` `Readonly` **disableReactivePropertyChanges**: boolean

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[disableReactivePropertyChanges](_webparts_calendars_calendarswebpart_.calendarswebpart.md#disablereactivepropertychanges)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:328*

This property is used to change the web part's property pane interaction from Reactive to NonReactive.

**`remarks`** 
The default behavior is Reactive.

Reactive implies that changes made in the PropertyPane are transmitted to the web part instantly and the user can
see instant updates. This helps the page creator get instant feedback and decide if they should keep the new
configuration changes or not.

NonReactive implies that the configuration changes are transmitted to the web part only after "Apply" PropertyPane
button is clicked.

___

### displayMode

• `Protected` `Readonly` **displayMode**: DisplayMode

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[displayMode](_webparts_calendars_calendarswebpart_.calendarswebpart.md#displaymode)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:300*

This property is the current display mode of the web part.

**`readonly`** 

___

### domElement

• `Protected` `Readonly` **domElement**: HTMLElement

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[domElement](_webparts_calendars_calendarswebpart_.calendarswebpart.md#domelement)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:98*

This property is a pointer to the root DOM element of the web part. This is a DIV element and contains the whole
DOM subtree of the web part.

**`readonly`** 

___

### instanceId

• `Readonly` **instanceId**: string

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[instanceId](_webparts_calendars_calendarswebpart_.calendarswebpart.md#instanceid)*

*Defined in node_modules/@microsoft/sp-component-base/dist/index-internal.d.ts:93*

A unique identifier for the instance of the component.

**`remarks`** 
A component implementation can be loaded multiple times on the page.
For example, if the component is a charting web part, multiple instances of this web part
could be added to the SharePoint canvas.  The instanceId uniquely identifies each
of these instances.

___

### isDisposed

• `Readonly` **isDisposed**: boolean

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[isDisposed](_webparts_calendars_calendarswebpart_.calendarswebpart.md#isdisposed)*

*Defined in node_modules/@microsoft/sp-component-base/dist/index-internal.d.ts:71*

Returns true if the component has been already disposed.

___

### isRenderAsync

• `Protected` `Readonly` **isRenderAsync**: boolean

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[isRenderAsync](_webparts_calendars_calendarswebpart_.calendarswebpart.md#isrenderasync)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:145*

Indicates whether the web part is rendering in Async mode.

**`remarks`** 
If the web part overrides this field to return true, then it needs to call renderCompleted API
after the web part rendering is complete.

The default value is false.

**`virtual`** 

___

### manifest

• `Readonly` **manifest**: IClientSideComponentManifest

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[manifest](_webparts_calendars_calendarswebpart_.calendarswebpart.md#manifest)*

*Defined in node_modules/@microsoft/sp-component-base/dist/index-internal.d.ts:77*

Provides access to the manifest for the client-side component.

**`remarks`** 
Child classes can override this with more specialized manifest types.

___

### msGraphClient

• `Private` **msGraphClient**: MSGraphClient

*Defined in [src/webparts/calendars/CalendarsWebPart.ts:20](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/CalendarsWebPart.ts#L20)*

___

### previewImageUrl

• `Readonly` **previewImageUrl**: string \| undefined

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[previewImageUrl](_webparts_calendars_calendarswebpart_.calendarswebpart.md#previewimageurl)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:289*

This property points to the preview image for the web part. The base implementation returns undefined. Web parts
that want to provide a valid preview image url need to override this API. The preview image url can be used to
create a preview of the web part or of the page on which the web part is present.

___

### properties

• `Protected` `Readonly` **properties**: [ICalendarsWebPartProps](../interfaces/_webparts_calendars_icalendarswebpartprops_.icalendarswebpartprops.md)

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[properties](_webparts_calendars_calendarswebpart_.calendarswebpart.md#properties)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:306*

This property is the pointer to the custom property bag of the web part.

**`readonly`** 

___

### propertiesMetadata

• `Protected` `Readonly` **propertiesMetadata**: IWebPartPropertiesMetadata \| undefined

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[propertiesMetadata](_webparts_calendars_calendarswebpart_.calendarswebpart.md#propertiesmetadata)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:314*

This property defines metadata for the web part property bag. The metadata can help SharePoint understand
the content of the properties better and perform relevant services on the data.

**`remarks`** 
See {@link IWebPartPropertiesMetadata} for more information about how to define metadata

___

### renderedFromPersistedData

• `Protected` `Readonly` **renderedFromPersistedData**: boolean

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[renderedFromPersistedData](_webparts_calendars_calendarswebpart_.calendarswebpart.md#renderedfrompersisteddata)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:116*

This property indicates whether the web part was rendered from the persisted data (serialized state from the
last time that the web part was saved) or not.

**`remarks`** 
Example: When web part is added for the first time using toolbox then the value is false.

**`readonly`** 

___

### renderedOnce

• `Protected` `Readonly` **renderedOnce**: boolean

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[renderedOnce](_webparts_calendars_calendarswebpart_.calendarswebpart.md#renderedonce)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:106*

This property indicates whether the web part has been rendered once or not. After the first time rendering,
the value of this property is always true until a full re-render of the web part happens.

**`readonly`** 

___

### title

• `Protected` `Readonly` **title**: string

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[title](_webparts_calendars_calendarswebpart_.calendarswebpart.md#title)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:340*

Title of the WebPart

**`readonly`** 

## Accessors

### dataVersion

• `Protected`get **dataVersion**(): Version

*Overrides void*

*Defined in [src/webparts/calendars/CalendarsWebPart.ts:49](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/CalendarsWebPart.ts#L49)*

**Returns:** Version

## Methods

### clearError

▸ `Protected`**clearError**(): void

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[clearError](_webparts_calendars_calendarswebpart_.calendarswebpart.md#clearerror)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:200*

This API should be used to clear the error message from the web part display area.

**Returns:** void

___

### dispose

▸ **dispose**(): void

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[dispose](_webparts_calendars_calendarswebpart_.calendarswebpart.md#dispose)*

*Defined in node_modules/@microsoft/sp-component-base/dist/index-internal.d.ts:67*

Disposes the component.

**`remarks`** 
Third-party code generally does not need to call this method; it's invoked
automatically when the lifecycle ends for a web part or extension.  To perform
custom cleanup when your component is disposed, override the {@link BaseComponent.onDispose}
method.

**Returns:** void

___

### getPropertyPaneConfiguration

▸ `Protected`**getPropertyPaneConfiguration**(): IPropertyPaneConfiguration

*Overrides void*

*Defined in [src/webparts/calendars/CalendarsWebPart.ts:53](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/CalendarsWebPart.ts#L53)*

**Returns:** IPropertyPaneConfiguration

___

### onAfterDeserialize

▸ `Protected`**onAfterDeserialize**(`deserializedObject`: any, `dataVersion`: Version): [ICalendarsWebPartProps](../interfaces/_webparts_calendars_icalendarswebpartprops_.icalendarswebpartprops.md)

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[onAfterDeserialize](_webparts_calendars_calendarswebpart_.calendarswebpart.md#onafterdeserialize)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:432*

This API is called after the web part is deserialized to an object, right before the property bag is populated.

**`remarks`** 
The default implementation is a no-op. A web part developer can override this API if the deserialized object
does not fully reflect the initial state of the property bag. This gives the web part developer a chance to
populate the property bag right after the data is deserialized to an object.

An important scenario to use deserialize is upgrading. An upgraded web part may load the data
that was serialized by an older version of the web part that supported a different schema of the property bag,
resulting the deserialized object to be incosistent with the current schema of the property bag. The developer
can use `onAfterDeserialize` to check the dataVersion and fix the property bag.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`deserializedObject` | any | The object deserialized from the stored data. Note that the schema of  this object is not necessarily consistent with the current property bag, because the serialization could have been done by an older version of the web part |
`dataVersion` | Version | The data version of the stored data being deserialized. You can use this value to determine if the data was serialized by an older web part. Web parts can define their data version by overriding the dataVersion property.  |

**Returns:** [ICalendarsWebPartProps](../interfaces/_webparts_calendars_icalendarswebpartprops_.icalendarswebpartprops.md)

The property bag of the web part

___

### onAfterPropertyPaneChangesApplied

▸ `Protected`**onAfterPropertyPaneChangesApplied**(): void

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[onAfterPropertyPaneChangesApplied](_webparts_calendars_calendarswebpart_.calendarswebpart.md#onafterpropertypanechangesapplied)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:498*

This API is invoked after the changes made on the PropertyPane are applied when the PropertyPane is used in
Non-Reactive mode. This API is not invoked when the PropertyPane is used in Reactive mode.

**Returns:** void

___

### onBeforeSerialize

▸ `Protected`**onBeforeSerialize**(): void

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[onBeforeSerialize](_webparts_calendars_calendarswebpart_.calendarswebpart.md#onbeforeserialize)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:409*

This event method is called before the web part is serialized.

**`remarks`** 
The default implementation is a no-op. The serialization
process serializes the web part property bag i.e. this.properties. This API gives the web part a chance to
update it's property bag before the serialization happens. Some web part's may keep their state other objects
or even in the DOM. If a web part needs to persist some of that state, it needs to override this API and update
the web part property bag to the latest state. If a web part updates the property bag with invalid property
values, those will get persisted. So that should be avoided. The web part property bag should always contain
valid property values.

**Returns:** void

___

### onDisplayModeChanged

▸ `Protected`**onDisplayModeChanged**(`oldDisplayMode`: DisplayMode): void

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[onDisplayModeChanged](_webparts_calendars_calendarswebpart_.calendarswebpart.md#ondisplaymodechanged)*

*Overrides void*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:176*

This event method is called when the display mode of a web part is changed.

**`remarks`** 
The default implementation of this API calls
the web part render method to re-render the web part with the new display mode. If a web part developer does not
want a full re-render to happen on display mode change, they can override this API and perform specific updates
to the web part DOM to switch its display mode.

**`virtual`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`oldDisplayMode` | DisplayMode | The old display mode.  |

**Returns:** void

___

### onDispose

▸ `Protected`**onDispose**(): void

*Overrides void*

*Defined in [src/webparts/calendars/CalendarsWebPart.ts:45](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/CalendarsWebPart.ts#L45)*

**Returns:** void

___

### onInit

▸ `Protected`**onInit**(): Promise<void\>

*Overrides void*

*Defined in [src/webparts/calendars/CalendarsWebPart.ts:22](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/CalendarsWebPart.ts#L22)*

**Returns:** Promise<void\>

___

### onPropertyPaneConfigurationComplete

▸ `Protected`**onPropertyPaneConfigurationComplete**(): void

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[onPropertyPaneConfigurationComplete](_webparts_calendars_calendarswebpart_.calendarswebpart.md#onpropertypaneconfigurationcomplete)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:493*

This API is invoked when the configuration is completed on the PropertyPane.

**`remarks`** 
This event method is invoked in the following cases:

 - When the CONFIGURATION_COMPLETE_TIMEOUT((currently the value is 5 secs) elapses after the last change.

 - When user clicks the "X" (close) button before the CONFIGURATION_COMPLETE_TIMEOUT elapses.

 - When user clicks the 'Apply' button before the CONFIGURATION_COMPLETE_TIMEOUT elapses.

 - When the user switches web parts then the current web part gets this event.

**Returns:** void

___

### onPropertyPaneConfigurationStart

▸ `Protected`**onPropertyPaneConfigurationStart**(): void

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[onPropertyPaneConfigurationStart](_webparts_calendars_calendarswebpart_.calendarswebpart.md#onpropertypaneconfigurationstart)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:478*

This event method is invoked when the configuration starts on the PropertyPane.

**`remarks`** 
This event method is invoked in the following cases:

 - When the PropertyPane is opened.

 - When the user switches web parts then the new web part gets this event.

**Returns:** void

___

### onPropertyPaneFieldChanged

▸ `Protected`**onPropertyPaneFieldChanged**(`propertyPath`: string, `oldValue`: any, `newValue`: any): void

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[onPropertyPaneFieldChanged](_webparts_calendars_calendarswebpart_.calendarswebpart.md#onpropertypanefieldchanged)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:467*

This API is invoked after updating the new value of the property in the property bag when the PropertyPane
is being used in Reactive mode.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`propertyPath` | string | JSON path of the property in the property bag.  In the case of custom field, if no target property is provided then a custom value is assigned,  which will be in the form of `__CustomField_<key provided when the custom field is created>`. |
`oldValue` | any | Old value of the property.  This value could be undefined/empty in the case of custom field. |
`newValue` | any | New value of the property.  This value could be undefined/empty in the case of custom field.  |

**Returns:** void

___

### onPropertyPaneRendered

▸ `Protected`**onPropertyPaneRendered**(): void

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[onPropertyPaneRendered](_webparts_calendars_calendarswebpart_.calendarswebpart.md#onpropertypanerendered)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:506*

This API is invoked when the PropertyPane is rendered.

**`privateremarks`** 
From framework standpoint, we do not want to allow this event handler to be passed in, and trigger it.
This api should be deprecated and then removed as part of refactoring.

**Returns:** void

___

### render

▸ **render**(): void

*Overrides void*

*Defined in [src/webparts/calendars/CalendarsWebPart.ts:32](https://github.com/noahspannbauer/spfx-react-calendars/blob/4d2cbb0/src/webparts/calendars/CalendarsWebPart.ts#L32)*

**Returns:** void

___

### renderCompleted

▸ `Protected`**renderCompleted**(): void

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[renderCompleted](_webparts_calendars_calendarswebpart_.calendarswebpart.md#rendercompleted)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:162*

This API should be called by web parts that perform Async rendering. Those web part are required to override
the isRenderAsync API and return true. One such example is web parts that render content in an IFrame. The
web part initiates the IFrame rendering in the `render()` API but the actual rendering is complete only after
the iframe loading completes.

**Returns:** void

___

### renderError

▸ `Protected`**renderError**(`error`: Error): void

*Inherited from [CalendarsWebPart](_webparts_calendars_calendarswebpart_.calendarswebpart.md).[renderError](_webparts_calendars_calendarswebpart_.calendarswebpart.md#rendererror)*

*Defined in node_modules/@microsoft/sp-webpart-base/dist/index-internal.d.ts:196*

This API should be used to render an error message in the web part display area. Also logs the error message
using the trace logger.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`error` | Error | An error object containing the error message to render.  |

**Returns:** void
