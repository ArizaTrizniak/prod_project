import {memo, useCallback} from 'react';
import cls from './ArticlesPage.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {ArticleList, ArticleView, ArticleViewSelector} from 'entities/Article';
import {articlePageActions, articlesPageReducer, getArticles}
    from '../../model/slices/articlePageSlice';
import {DynamicModuleLoader, ReducersList}
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {fetchArticlesList} from '../../model/services/fetchArticlesList/fetchArticlesList';
import {useSelector} from 'react-redux';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import Page from 'shared/ui/Page/Page';
import {fetchNextArticlesPage}
    from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({className}: ArticlesPageProps) => {
    const {t} = useTranslation('article');
    const dispatch= useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback((view:ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlePageActions.initState());
        dispatch(fetchArticlesList({
            page: 1
        }));
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);