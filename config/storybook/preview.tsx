import type {Preview, StoryFn} from '@storybook/react';
import 'app/styles/index.scss';
import {Theme, ThemeProvider} from 'app/providers/ThemeProvider';
import {BrowserRouter} from 'react-router-dom';
import {StateSchema} from 'app/providers/StoreProvider';
import {StoreProvider} from 'app/providers/StoreProvider';
import {loginReducer} from 'features/AuthByUsername/model/slice/loginSlice';
import 'loki/configure-react';
import {profileReducer} from 'entities/Profile';
import {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articleDetailsReducer} from 'entities/Article/model/slice/articleDetailsSlice';
import {addCommentFormReducer} from 'features/AddCommentForm/model/slices/addCommentFormSlice';
import {articleDetailsPageReducer} from 'pages/ArticlesDetailsPage/model/slices';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent/>
        </div>
    </ThemeProvider>
);

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsPage: articleDetailsPageReducer,
    addCommentForm: addCommentFormReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: StoryFn) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent/>
    </StoreProvider>
);

export const RouterDecorator = (StoryComponent: StoryFn) => (
    <BrowserRouter>
        <StoryComponent/>
    </BrowserRouter>
);

const preview: Preview = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
    ],
    parameters: {
        /*actions: { argTypesRegex: '^on[A-Z].*' },*/
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

};

export default preview;


