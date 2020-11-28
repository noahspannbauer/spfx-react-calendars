import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import Calendars from './components/Calendars';
import { ICalendarsProps } from './models/ICalendarsProps';
import {
  PropertyFieldCollectionData,
  CustomCollectionFieldType
} from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';
import { sp } from '@pnp/sp';
import { ICalendarsWebPartProps } from './models/ICalendarsWebPartProps';

export default class CalendarsWebPart extends BaseClientSideWebPart<ICalendarsWebPartProps> {
  protected onInit(): Promise<void> {
    return super.onInit().then(() => {
      sp.setup({
        spfxContext: this.context
      });
    });
  }

  public render(): void {
    const element: React.ReactElement<ICalendarsProps> = React.createElement(
      Calendars,
      {
        contentTypes: this.properties.contentTypes,
        eventTitleFieldName: this.properties.eventTitleFieldName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          groups: [
            {
              groupFields: [
                PropertyFieldCollectionData('contentTypes', {
                  key: 'contentTypes',
                  label: '',
                  panelHeader: 'Content Types',
                  manageBtnLabel: 'Manage Content Types',
                  value: this.properties.contentTypes,
                  fields: [
                    {
                      id: 'contentTypeName',
                      title: 'Content Type Name',
                      type: CustomCollectionFieldType.string,
                      required: true
                    },
                    {
                      id: 'eventColor',
                      title: 'Event Background Color',
                      type: CustomCollectionFieldType.string,
                      required: true
                    }
                  ],
                  disabled: false
                }),
                PropertyPaneDropdown('eventTitleFieldName', {
                  label: 'Event Title Field Name',
                  options: [
                    { key: 'Title', text: 'Title' },
                    { key: 'Opponent', text: 'Opponent' }
                  ],
                  selectedKey: this.properties.eventTitleFieldName,
                  disabled: false
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
