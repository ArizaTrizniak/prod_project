import {memo, useCallback} from 'react';
import cls from './ArticlesPage.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {ArticleList} from 'entities/Article';
import {
    articlesPageReducer,
    getArticles
} from '../../model/slices/articlePageSlice';
import {DynamicModuleLoader, ReducersList}
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {useSelector} from 'react-redux';
import {
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import Page from 'widgets/Page/Page';
import {fetchNextArticlesPage}
    from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage';
import {ArticlesPageFilters} from 'pages/ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({className}: ArticlesPageProps) => {
    const dispatch= useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    className={cls.list}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);