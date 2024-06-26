import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import {memo} from 'react';
import Page from 'widgets/Page/Page';
import {useParams} from 'react-router-dom';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const {className} = props;
    const {id} = useParams<{id:string}>();
    const isEdit = Boolean(id);
    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? 'EDIT '+ id : 'NEW'}
        </Page>
    );
});

export default ArticleEditPage;