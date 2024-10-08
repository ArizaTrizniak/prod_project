import React from 'react';
import {useTranslation} from 'react-i18next';
import {Counter} from '_entities/Counter';
import Page from 'widgets/Page/Page';

const AboutPage = () => {
    const {t} =useTranslation('about');
    return (
        <Page>
            {t('О сайте')}
            <Counter/>
        </Page>
    );
};

export default AboutPage;