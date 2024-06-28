import {memo, useCallback} from 'react';
import cls from './ArticleDetailsPage.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {ArticleDetails, ArticleList} from 'entities/Article';
import {useParams} from 'react-router-dom';
import Text, {TextSize} from 'shared/ui/Text/Text';
import {CommentList} from 'entities/Comment';
import {DynamicModuleLoader, ReducersList}
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {getArticleComments} from '../../model/slices/articleDetailsCommentsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {getArticleCommentsIsLoading} from '../../model/selectors/comments';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect';
import {fetchCommentsByArticleId}
    from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {AddCommentForm} from 'features/AddCommentForm';
import {addCommentForArticle}
    from '../../model/services/addCommentForArticle/addCommentForArticle';
import Page from 'widgets/Page/Page';
import {
    getArticleRecomendation
} from '../../model/slices/articleDetailsPageRecomendationSlice';
import {getArticleRecomendationsIsLoading} from '../../model/selectors/recomendations';
import {
    fetchArticleRecomendations
} from '../../model/services/fetchArticleRecomendations/fetchArticleRecomendations';
import {articleDetailsPageReducer} from '../../model/slices';
import ArticleDetailsPageHeader
    from 'pages/ArticlesDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {VStack} from 'shared/ui/Stack';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
    const {t} = useTranslation('article');
    const {id} = useParams<{id: string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const recomendations = useSelector(getArticleRecomendation.selectAll);
    const dispatch = useDispatch();
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recomendationsIsLoading = useSelector(getArticleRecomendationsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchCommentsByArticleId(id));
            dispatch(fetchArticleRecomendations());
        }
    });

    if (!id) {

        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap={'16'} max>
                    <ArticleDetailsPageHeader/>
                    <ArticleDetails id={id}/>
                    <Text size={TextSize.L} className={cls.commentTitle} title={t('Рекомендуем')}/>
                    <ArticleList
                        articles={recomendations}
                        isLoading={recomendationsIsLoading}
                        className={cls.recomendations}
                        target={
                            // eslint-disable-next-line i18next/no-literal-string
                            '_blank'
                        }
                    />
                    <Text size={TextSize.L} className={cls.commentTitle} title={t('Комментарии')}/>
                    <AddCommentForm onSendComment={onSendComment}/>
                    <CommentList isLoading={commentsIsLoading} comments={comments}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);