import {rtkApi} from 'shared/api/rtkApi';
import {Article} from '_entities/Article';

const recomendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                }
            }),
        }),
    }),
});

export const useArticleRecommendationList = recomendationsApi.useGetArticleRecommendationsListQuery;
