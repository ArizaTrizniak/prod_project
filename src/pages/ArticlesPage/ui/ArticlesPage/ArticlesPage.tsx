import {memo, useCallback} from 'react';
import cls from './ArticlesPage.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {articlesPageReducer} from '../../model/slices/articlePageSlice';
import {DynamicModuleLoader, ReducersList}
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import Page from 'widgets/Page/Page';
import {fetchNextArticlesPage}
    from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage';
import {ArticlesPageFilters} from 'pages/ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';
import ArticleInfiniteList from '../../ui/ArticleInfiniteList/ArticleInfiniteList';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({className}: ArticlesPageProps) => {
    const dispatch= useAppDispatch();
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
                <ArticleInfiniteList className={cls.list}/>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);