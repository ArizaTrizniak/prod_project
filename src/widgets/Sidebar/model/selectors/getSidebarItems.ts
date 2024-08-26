import {createSelector} from '@reduxjs/toolkit';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import {SidebarItemType} from '../types/sidebar';
import { getUserAuthData }
    from '_entities/User/model/selectors/getUserAuthData/getUserAuthData';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] =[
            {
                path: RoutePath.main,
                text: 'Главная',
                Icon: MainIcon,
            },
            {
                path: RoutePath.about,
                text: 'О сайте',
                Icon: AboutIcon,
            }
        ];
        if (userData) {
            sidebarItemsList.push({
                path: RoutePath.profile + userData.id,
                text: 'Профиль',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                text: 'Статьи',
                Icon: ArticleIcon,
                authOnly: true,
            });
        }
        return sidebarItemsList;
    }
);