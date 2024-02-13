import React, {useCallback, useState } from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import {useTranslation} from 'react-i18next';
import {Modal} from 'shared/ui/Modal/Modal';
import Button, {ButtonTheme} from 'shared/ui/Button/Button';

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    const {t} =useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.Links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen ={isAuthModal} onClose={onToggleModal}>
                {t('Тест_текст')}
            </Modal>
        </div>
    );
};

export default Navbar;
