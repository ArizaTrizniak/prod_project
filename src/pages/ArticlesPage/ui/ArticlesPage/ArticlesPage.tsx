import {memo} from 'react';
import cls from './ArticlesPage.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Article, ArticleList} from 'entities/Article';
import {ArticleView} from 'entities/Article/model/types/article';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({className}: ArticlesPageProps) => {
    const {t} = useTranslation('article');

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList
                isLoading
                view={ArticleView.LIST}
                articles={[]}
            />
        </div>
    );
};

export default memo(ArticlesPage);