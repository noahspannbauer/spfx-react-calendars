import React from 'react';
import { MSGraphClient } from '@microsoft/sp-http';

export interface IAppContextProviderProps {
  msGraphClient: MSGraphClient;
  contentTypeCategories: any[];
  children: React.ReactNode;
}
