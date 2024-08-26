import {createSelector} from '@reduxjs/toolkit';
import {getUserAuthData} from '_entities/User';
import {getArticleDetailsData} from '_entities/Article';

export const getCanEditArticle = createSelector(
    getArticleDetailsData,
    getUserAuthData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }

        return article.user.id === user.id;
    }
);