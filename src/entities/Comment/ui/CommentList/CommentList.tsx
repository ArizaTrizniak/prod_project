import {classNames} from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import {useTranslation} from 'react-i18next';
import {memo} from 'react';
import CommentCard from '../../ui/CommentCard/CommentCard';
import Text from 'shared/ui/Text/Text';
import {Comment} from 'entities/Comment';

interface CommentListProps {
    className?: string;
    comments?:Comment[];
    isLoading?:boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {className, isLoading, comments} = props;
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment: Comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                    />
                ))
                : <Text text={t('Комментариев нет')} />
            }
        </div>
    );
});
