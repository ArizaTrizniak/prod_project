import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';

import {StateSchema} from 'app/providers/StoreProvider';
import {
    ArticleDetailsPageRecomendationSchema
} from 'pages/ArticlesDetailsPage/model/types/ArticleDetailsPageRecomendationSchema';
import {Article} from '_entities/Article';
import { fetchArticleRecomendations }
    from '../services/fetchArticleRecomendations/fetchArticleRecomendations';

const recomendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecomendation = recomendationsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailsPage?.recommendations || recomendationsAdapter.getInitialState()
);

const articleDetailsPageRecomendationSlice = createSlice({
    name: 'articleDetailsPageRecomendationSlice',
    initialState: recomendationsAdapter.getInitialState<ArticleDetailsPageRecomendationSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecomendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecomendations.fulfilled, (
                state,
                action
            ) => {
                state.isLoading = false;
                recomendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecomendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articleDetailsPageRecomendationReducer} = articleDetailsPageRecomendationSlice;

