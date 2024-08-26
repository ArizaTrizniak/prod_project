import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {memo, useCallback, Suspense} from 'react';
import Text, {TextSize} from 'shared/ui/Text/Text';
import {AddCommentForm} from 'features/AddCommentForm';
import {CommentList} from '_entities/Comment';
import {useDispatch, useSelector} from 'react-redux';
import {getArticleComments} from '../../model/slices/articleDetailsCommentsSlice';
import {getArticleCommentsIsLoading} from '../../model/selectors/comments';
import {addCommentForArticle} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect';
import {
    fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {VStack} from 'shared/ui/Stack';
import Loader from 'shared/ui/Loader/Loader';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const {className, id} = props;
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    
    useInitialEffect(() => {
        if (id) {
            dispatch(fetchCommentsByArticleId(id));
        }
    });
    
    return (
        <VStack gap= '8' max className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Комментарии')}
            />
            <Suspense fallback={<Loader />} >
                <AddCommentForm onSendComment={onSendComment}/>
            </Suspense>
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
});

export default ArticleDetailsComments;