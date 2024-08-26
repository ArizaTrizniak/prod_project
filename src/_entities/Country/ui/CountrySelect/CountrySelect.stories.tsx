import type {Meta, StoryObj} from '@storybook/react';
import {CountrySelect} from './CountrySelect';


const meta: Meta<typeof CountrySelect> = {
    title: '_entities/CountrySelect',
    component: CountrySelect,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {
    args: {},
};