import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import { MSGraphClient } from '@microsoft/sp-http';
import * as strings from 'CalendarsWebPartStrings';
import Calendars from './components/Calendars';
import { ICalendarsProps } from './components/ICalendarsProps';
import {
  PropertyFieldCollectionData,
  CustomCollectionFieldType
} from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';
import { sp } from '@pnp/sp';

export interface ICalendarsWebPartProps {
  contentTypeCategories: any[];
}

export default class CalendarsWebPart extends BaseClientSideWebPart<ICalendarsWebPartProps> {
  protected async onInit(): Promise<void> {
    await super.onInit();
    sp.setup(this.context);
  }

  public async render(): Promise<void> {
    const msGraphClient: MSGraphClient =
      await this.context.msGraphClientFactory.getClient();
    const element: React.ReactElement<ICalendarsProps> = React.createElement(
      Calendars,
      {
        msGraphClient: msGraphClient,
        contentTypeCategories: this.properties.contentTypeCategories
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
              groupFields: [
                PropertyFieldCollectionData('contentTypeCategories', {
                  key: 'contentTypeCategories',
                  label: 'Content Type Categories',
                  panelHeader: 'Content Type Categories',
                  manageBtnLabel: 'Manage Content Type Categories',
                  value: this.properties.contentTypeCategories,
                  fields: [
                    {
                      id: 'contentTypeCategory',
                      title: 'Content Type Category',
                      type: CustomCollectionFieldType.string,
                      required: true
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
