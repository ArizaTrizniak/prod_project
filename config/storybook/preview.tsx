import type {Preview, StoryFn} from '@storybook/react';
//import {StyleDecorator} from '../../src/shared/config/StyleDecorator/StyleDecorator';
import 'app/styles/index.scss';
import {Theme} from 'app/providers/ThemeProvider';
import {BrowserRouter} from 'react-router-dom';
import {Story} from '@storybook/blocks';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
        <StoryComponent/>
    </div>
);

export const RouterDecorator =  (StoryComponent: StoryFn) => (
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
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

};

export default preview;


