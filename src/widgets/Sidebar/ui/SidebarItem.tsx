import cls from './SidebarItem.module.scss';
import {useTranslation} from 'react-i18next';
import AppLink, {AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import React, {memo} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {useSelector} from 'react-redux';
import {getUserAuthData} from '_entities/User';
import {SidebarItemType} from 'widgets/Sidebar/model/types/sidebar';

interface SidebarItemProps {
    item : SidebarItemType;
    collapsed: boolean;
}


const SidebarItem = memo(({item, collapsed}: SidebarItemProps) => {
    const {t} = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, {[cls.collapsed]:collapsed})}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {/* i18next-extract-disable-next-line */}
                {t(item.text)}
            </span>
        </AppLink>
    );
});

export default SidebarItem;