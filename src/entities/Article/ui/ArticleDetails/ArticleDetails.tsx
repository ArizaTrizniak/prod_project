import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import {useTranslation} from 'react-i18next';
import {DynamicModuleLoader, ReducersList}
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articleDetailsReducer} from '../../model/slice/articleDetailsSlice';
import React, {memo, useCallback, useEffect} from 'react';
import {fetchArticleById} from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {useSelector} from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';
import Text, {TextAlign, TextSize} from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import {Icon} from 'shared/ui/Icon/Icon';
import {ArticleBlock, ArticleBlockType} from '../../model/types/article';
import ArticleCodeBlockComponent
    from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleTextBlockComponent
    from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import ArticleImageBlockComponent
    from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({className, id}: ArticleDetailsProps) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block:ArticleBlock)=> {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent
                key={block.id}
                className={cls.block}
                block={block}
            />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent
                key={block.id}
                className={cls.block}
                block={block}
            />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent
                key={block.id}
                className={cls.block}
                block={block}
            />;
        default:
            return null;    
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;
    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'} />
                <Skeleton className={cls.title} width={'80%'} height={30} />
                <Skeleton className={cls.skeleton} width={'100%'} height={100} />
                <Skeleton className={cls.skeleton} width={'100%'} height={100} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                title={t('Ошибка при загрузке статьи')}
                align={TextAlign.CENTER}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon}/>
                    <Text text={String(article?.views)}/>
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon}/>
                    <Text text={article?.createdAt}/>
                </div>
                {article?.blocks.map(block => (renderBlock(block)))}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
