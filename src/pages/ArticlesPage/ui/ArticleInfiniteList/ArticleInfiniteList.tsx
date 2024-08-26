import {useTranslation} from 'react-i18next';
import React, {memo} from 'react';
import {ArticleList} from '_entities/Article';
import {useSelector} from 'react-redux';
import {getArticles} from '../../model/slices/articlePageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import Text from 'shared/ui/Text/Text';

interface ArticleInfiniteListProps {
    className?: string;
}

const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const {className} = props;
    const {t} = useTranslation();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    if (error) {
        return <Text text={t('Ошибка при загрузке статей')}/>;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});

export default ArticleInfiniteList;