import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import {useTranslation} from 'react-i18next';
import {HTMLAttributeAnchorTarget, memo} from 'react';
import {Article} from 'entities/Article';
import {ArticleView} from '../../model/types/article';
import ArticleListItem from '../../ui/ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import Text, {TextSize} from 'shared/ui/Text/Text';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSketetons = (view: ArticleView) => {
    return  new Array(view === ArticleView.PLATE ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                key={index}
                view={view}
                className={cls.card}
            />
        ));
};

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.PLATE,
        target,
    } = props;
    const {t} = useTranslation();

    const renderArticle = (article: Article) =>(
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            className={cls.card}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
            {isLoading && getSketetons(view)}
        </div>
    );
});
