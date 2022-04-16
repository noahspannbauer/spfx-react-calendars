import React from 'react';
import FilterPanel from '../filterPanel/FilterPanel';
import SettingsPanel from '../settingsPanel/SettingsPanel';
import Calendar from '../calendar/Calendar';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { useAppContext } from '../../hooks/appContext/UseAppContext';
import { useUserFavorites } from '../../hooks/userFavorites/UseUserFavorites';
import { useEffect } from 'react';
import { useQueryString } from '../../hooks/queryString/UseQueryString';
import { IUserSetting } from '../../models/IUserSetting';

const App: React.FC<{}> = () => {
    const appContext = useAppContext();
    const { userFavorites, userFavoritesError } = useUserFavorites();

    useEffect(() => {
      if (userFavorites.length > 0) {
        appContext.dispatch({ type: "SET_USER_FAVORITES", payload: userFavorites })
      }
    }, [userFavorites])

    return (
      <React.Fragment>
        <FilterPanel />
        <SettingsPanel />
        <Calendar />
      </React.Fragment>
    )
}

export default App;