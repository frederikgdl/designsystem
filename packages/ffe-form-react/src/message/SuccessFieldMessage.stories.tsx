import React from 'react';
import { SuccessFieldMessage } from './SuccessFieldMessage';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof SuccessFieldMessage> = {
    title: 'components/form/SuccessFieldMessage',
    component: SuccessFieldMessage,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof SuccessFieldMessage>;

export const Standard: Story = {
    args: {
        children: 'Noe gikk bra her',
    },
    render: args => <SuccessFieldMessage {...args} />,
};