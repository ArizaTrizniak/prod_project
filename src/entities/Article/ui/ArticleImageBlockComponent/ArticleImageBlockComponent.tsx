import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import {memo} from 'react';
import {ArticleImageBlock} from '../../model/types/article';
import Text from 'shared/ui/Text/Text';
import {TextAlign} from 'shared/ui/Text/Text';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const {className, block} = props;

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} className={cls.img}  alt={block.title}/>
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER}/>
            )}
        </div>
    );
};

export default memo(ArticleImageBlockComponent);