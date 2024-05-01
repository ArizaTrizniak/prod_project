import {memo, useCallback} from 'react';
import cls from './ArticleDetailsPage.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {ArticleDetails} from 'entities/Article';
import {useParams} from 'react-router-dom';
import Text from 'shared/ui/Text/Text';
import {CommentList} from 'entities/Comment';
import {DynamicModuleLoader, ReducersList}
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articleDetailCommentsReducer, getArticleComments}
    from '../../model/slices/articleDetailsCommentsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {getArticleCommentsIsLoading} from '../../model/selectors/comments';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect';
import {
    fetchCommentsByArticleId
} from 'pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {AddCommentForm} from 'features/AddCommentForm';
import {addCommentForArticle}
    from 'pages/ArticlesDetailsPage/model/services/addCommentForArticle/addCommentForArticle';


interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailCommentsReducer
};

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
    const {t} = useTranslation('article');
    const {id} = useParams<{id: string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const dispatch = useDispatch();
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id}/>
                <Text className={cls.commentTitle} title={t('Комментарии')}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList isLoading={commentsIsLoading} comments={comments}/>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);