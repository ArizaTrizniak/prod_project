module.exports = (layer, componentName) => `import type {Meta, StoryObj} from '@storybook/react';

import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
    title: '${layer}/${componentName}',
    component: ${componentName},
    parameters: {
        layout: 'fullscreen',
        backgroundColor: {control: 'color'}
    }
};
export default meta;

type Story = StoryObj<typeof ${componentName}>;

export const Normal: Story = {
    args: {},
};`;
