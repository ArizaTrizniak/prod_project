import {CounterSchema} from '_entities/Counter';
import {UserSchema} from '_entities/User';
import {LoginSchema} from 'features/AuthByUsername';
import {AnyAction, CombinedState, EnhancedStore, ReducersMapObject} from '@reduxjs/toolkit';
import {Reducer} from 'react';

import {AxiosInstance} from 'axios';
import {ArticleDetailsSchema} from '_entities/Article';
import {AddCommentFormSchema} from 'features/AddCommentForm';
import {UISchema} from 'features/UI';
import {ArticlesPageSchema} from 'pages/ArticlesPage';
import {ArticleDetailsPageSchema} from 'pages/ArticlesDetailsPage/model/types';
import {rtkApi} from 'shared/api/rtkApi';
import {ProfileSchema} from 'features/editableProfileCard';

export interface  StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    ui: UISchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    //Асинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) =>  CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer<any, any>) => void;
    remove: (key: StateSchemaKey) => void;
    // true - вмонтирован
    getMountedReducers: () => MountedReducers;
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager;
}

export interface  ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state:StateSchema;
}