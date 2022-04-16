import { useEffect, useState } from "react"
import { IUserSetting } from "../../models/IUserSetting";
import { IColor } from "office-ui-fabric-react/lib/Color";
import { sp } from '@pnp/sp';
import { ISiteUserInfo } from "@pnp/sp/site-users/types";
import { IItemAddResult } from "@pnp/sp/items";
import '@pnp/sp/webs';
import '@pnp/sp/site-users/web';
import '@pnp/sp/lists';
import '@pnp/sp/items';

export const useUserSettings = () => {
    const [initialView, setInitialViewState] = useState<string>(undefined);
    const [contentTypeSettings, setContentTypeSettings] = useState<{ contentTypeId: string, contentTypeName: string, backgroundColor: string }[]>([]);
    const [isUserSettingsLoading, setIsUserSettingsLoading] = useState<boolean>(true);
    const [userSettingsError, setUserSettingsError] = useState<string>('');
    const [userSettingsId, setUserSettingsId] = useState<number>(undefined);

    const setInitialView = (initialView: string) => {
        setInitialViewState(initialView);
    }

    const setContentTypeColor = (selectedContentTypeId: string, selectedContentTypeName: string, colorPickerColor: IColor) => {
        const newContentTypeSettings: { contentTypeId: string, contentTypeName: string, backgroundColor: string }[] = [...contentTypeSettings];
        const newContentTypeSettingIndex: number = newContentTypeSettings.findIndex(contentTypeSetting => contentTypeSetting.contentTypeName === selectedContentTypeName); 
        
        if (newContentTypeSettingIndex !== -1) {
            newContentTypeSettings[newContentTypeSettingIndex].backgroundColor = colorPickerColor.str;
        } else {
            newContentTypeSettings.push({
                contentTypeId: selectedContentTypeId,
                contentTypeName: selectedContentTypeName,
                backgroundColor: colorPickerColor.str
            })
        }
        console.log(newContentTypeSettings)
        setContentTypeSettings(newContentTypeSettings);
    }

    const saveUserSettings = async () => {
        try {
            setIsUserSettingsLoading(true);
            const userSettings: IUserSetting = {
                initialView: initialView,
                contentTypeSettings: contentTypeSettings
            }
            const userSettingsJsonString: string = JSON.stringify(userSettings);

            if (userSettingsId) {
                await sp.web.lists.getByTitle('Settings').items.getById(userSettingsId).update({
                    Settings: userSettingsJsonString
                })
            } else {
                const currentUser: ISiteUserInfo = await sp.web.currentUser();
                const newUserSetting: IItemAddResult = await sp.web.lists.getByTitle('Settings').items.add({
                    UserId: currentUser.Id,
                    Settings: userSettingsJsonString
                })

                setUserSettingsId(newUserSetting.data.ID);
            }

            setIsUserSettingsLoading(false);
        } catch (error) {
            setIsUserSettingsLoading(false);
            setUserSettingsError(error.message);
        }
    }

    useEffect(() => {
        const getUserSettings = async () => {
            try {
                const currentUser: ISiteUserInfo = await sp.web.currentUser();
                const items: any[] = await sp.web.lists.getByTitle('Settings').items.select('ID', 'User', 'User/ID', 'Settings').expand('User').filter(`User/ID eq ${currentUser.Id}`).get();
                
                if (items.length > 0) {
                    const settings: IUserSetting = JSON.parse(items[0].Settings)

                    setInitialViewState(settings.initialView);
                    setContentTypeSettings(settings.contentTypeSettings)
                    setUserSettingsId(items[0].Id)
                } else {
                    setInitialViewState('dayGridMonth');
                }

                setIsUserSettingsLoading(false)
            } catch (error) {
                setUserSettingsError(error.message);
                setIsUserSettingsLoading(false)
            }
        }
        
        getUserSettings();
    }, []);

    return {
        initialView,
        setInitialView,
        contentTypeSettings,
        setContentTypeColor,
        userSettingsError,
        userSettingsId,
        saveUserSettings
    }
}