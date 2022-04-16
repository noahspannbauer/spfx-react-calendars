import React, { useEffect, useState } from 'react';
import { useAppContext } from '../appContext/UseAppContext';

export const useContentTypes = () => {
    const [contentTypes, setContentTypes] = useState<any[]>([]);
    const appContext = useAppContext();

    useEffect(() => {
        const getContentTypes = async () => {
            const contentTypeHubSpIds = await appContext.state.msGraphClient.api('/sites/noahspan.sharepoint.com:/sites/contenttypehub?$select=sharepointIds').get();
            const contentTypeHubSiteId = contentTypeHubSpIds.sharepointIds.siteId;
            const contentTypeHubTypes = await appContext.state.msGraphClient.api(`/sites/${contentTypeHubSiteId}/contentTypes?$filter=group eq '${appContext.state.contentTypeCategories[0].contentTypeCategory}'`).get();
            const filteredContentTypes: any[] = contentTypeHubTypes.value.filter((contentType) => {
                if (contentType.name !== 'Game') {
                    return contentType
                }
            }).sort((a, b) => (a.name > b.name) ? 1 : -1);

            setContentTypes(filteredContentTypes);
        }

        getContentTypes();
    }, [])

    return {
        contentTypes
    }
}