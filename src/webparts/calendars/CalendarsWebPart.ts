import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'CalendarsWebPartStrings';
import Calendars from './components/Calendars';
import { ICalendarsProps } from './components/ICalendarsProps';
import {
  PropertyFieldCollectionData,
  CustomCollectionFieldType
} from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';
import { sp } from '@pnp/sp';

export interface ICalendarsWebPartProps {
  contentTypes: any[];
}

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
        contentTypes: this.properties.contentTypes
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
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyFieldCollectionData('collectionData', {
                  key: 'collectionData',
                  label: 'Collection data',
                  panelHeader: 'Collection data panel header',
                  manageBtnLabel: 'Manage collection data',
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
                      type: CustomCollectionFieldType.string
                    }
                  ],
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
