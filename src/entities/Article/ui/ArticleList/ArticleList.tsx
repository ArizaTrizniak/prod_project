import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import {useTranslation} from 'react-i18next';
import {memo} from 'react';
import {Article} from 'entities/Article';
import {ArticleView} from '../../model/types/article';
import ArticleListItem from '../../ui/ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
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
    } = props;
    const {t} = useTranslation();

    const renderArticle = (article: Article) =>(
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            className={cls.card}
        />
    );
    
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
