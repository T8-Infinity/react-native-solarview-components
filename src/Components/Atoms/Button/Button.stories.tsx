import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button } from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    title: text('title', 'Botão'),
    onPress: action('onPress'),
    gradient: boolean('gradient', false),
    loading: boolean('loading', false),
  },
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);
