import React, { useEffect, useState } from 'react';
import { sp } from '@pnp/sp';
import { ISiteUserInfo } from "@pnp/sp/site-users/types";
import '@pnp/sp/webs';
import '@pnp/sp/site-users/web';
import '@pnp/sp/lists';
import '@pnp/sp/items';

export const useUserFavorites = () => {
    const [userFavorites, setUserFavorites] = useState([]);
    const [userFavoritesError, setUserFavoritesError] = useState('');
    const [userFavoritesId, setUserFavoritesId] = useState(undefined);

    useEffect(() => {
        const getUserFavorites = async () => {
            try {
                const currentUser: ISiteUserInfo = await sp.web.currentUser();
                const items: any[] = await sp.web.lists.getByTitle('Favorites').items.select('ID', 'User', 'User/ID', 'Favorites').expand('User').filter(`User/ID eq ${currentUser.Id}`).get();
                const favorites: string[] = items[0].Favorites.split(';');
                
                setUserFavorites(favorites);
                setUserFavoritesId(items[0].Id);
            } catch(error) {
                setUserFavoritesError(error.message);
            }
        }

        getUserFavorites();
    }, [])

    return {
        userFavorites,
        userFavoritesId,
        userFavoritesError
    }
}