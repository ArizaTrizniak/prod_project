import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import React, {memo, useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher/ui/LangSwitcher';
import Button, {ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';
import {SidebarItemsList} from '../model/Items';
import SidebarItem from './SidebarItem';

interface SidebarProps {
    className?: string;
}

const Sidebar = memo(({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar,
                {[cls.collapsed]:collapsed},
                [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>

        </div>
    );
});

export default Sidebar;