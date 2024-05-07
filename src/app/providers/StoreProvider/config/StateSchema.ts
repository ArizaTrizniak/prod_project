import {CounterSchema} from 'entities/Counter';
import {UserSchema} from 'entities/User';
import {LoginSchema} from 'features/AuthByUsername';
import {AnyAction, CombinedState, EnhancedStore, ReducersMapObject} from '@reduxjs/toolkit';
import {Reducer} from 'react';
import {ProfileSchema} from 'entities/Profile';
import {AxiosInstance} from 'axios';
import {To} from 'history';
import {NavigateOptions} from 'react-router';
import {ArticleDetailsSchema} from 'entities/Article';
import {ArticleDetailsCommentsSchema, ArticlePageSchema} from 'pages/ArticlesDetailsPage';
import {AddCommentFormSchema} from 'features/AddCommentForm';

export interface  StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    //Асинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsComments?: ArticleDetailsCommentsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlePageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) =>  CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer<any, any>) => void;
    remove: (key: StateSchemaKey) => void;
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager;
}

export interface  ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state:StateSchema;
}