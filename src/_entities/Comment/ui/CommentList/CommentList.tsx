import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {memo} from 'react';
import CommentCard from '../../ui/CommentCard/CommentCard';
import Text from 'shared/ui/Text/Text';
import {Comment} from '_entities/Comment';
import {VStack} from 'shared/ui/Stack';

interface CommentListProps {
    className?: string;
    comments?:Comment[];
    isLoading?:boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {className, isLoading, comments} = props;
    const {t} = useTranslation();

    if (isLoading) {
        return (
            <VStack gap={'16'} max className={classNames('', {}, [className])}>
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
            </VStack>
        );
    }
    return (
        <VStack gap={'16'} max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map((comment: Comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        comment={comment}
                        key={comment.id}
                    />
                ))
                : <Text text={t('Комментариев нет')} />
            }
        </VStack>
    );
});
