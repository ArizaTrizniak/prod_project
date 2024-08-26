import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import {useTranslation} from 'react-i18next';
import {HTMLAttributeAnchorTarget, memo} from 'react';
import {Article} from '_entities/Article';
import {ArticleView} from '../../model/types/article';
import ArticleListItem from '../../ui/ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '_entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import Text, {TextSize} from 'shared/ui/Text/Text';
import {List, ListRowProps, WindowScroller} from 'react-virtualized';
import {PAGE_ID} from 'widgets/Page/Page';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
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
        virtualized = true,
    } = props;
    const {t} = useTranslation();

    const isBig = view === ArticleView.LIST;

    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ?
        articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({index, isScrolling, key, style}: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i< toIndex; i++) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    className={cls.card}
                    target={target}
                    key={articles[i].id}
                />
            );
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>

        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height,
                width,
                registerChild,
                onChildScroll, 
                isScrolling,
                scrollTop,
            }) => (
                <div
                    // @ts-ignore
                    ref={registerChild}
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                    {virtualized
                        ? (<List
                            height={height ?? 700}
                            rowCount={rowCount}
                            rowHeight={isBig ? 700 : 330}
                            rowRenderer={rowRender}
                            width={width ? width - 80 :700}
                            autoHeight
                            onScroll={onChildScroll}
                            isScrolling={isScrolling}
                            scrollTop={scrollTop}
                        />)
                        : (
                            articles.map(item => (
                                <ArticleListItem
                                    article={item}
                                    view={view}
                                    className={cls.card}
                                    target={target}
                                    key={item.id}
                                />
                            ))
                        )}

                    {isLoading && getSketetons(view)}
                </div>
            )}
        </WindowScroller>
       
    /* <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
            {isLoading && getSketetons(view)}
        </div>*/
    );
});
