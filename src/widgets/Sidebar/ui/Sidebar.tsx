import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import React, {memo, useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher/ui/LangSwitcher';
import Button, {ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';
import SidebarItem from './SidebarItem';
import {useSelector} from 'react-redux';
import {getSidebarItems} from '../model/selectors/getSidebarItems';
import {VStack} from 'shared/ui/Stack/VStack/VStack';

interface SidebarProps {
    className?: string;
}

const Sidebar = memo(({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);
    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <section
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
            <VStack role='navigation' gap='8' className={cls.items}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>

        </section>
    );
});

export default Sidebar;