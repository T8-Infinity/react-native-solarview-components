import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Skip } from '.';

export default {
  title: 'Atoms/Skip',
  component: Skip,
  args: {
    text: text('text', 'Pular'),
    onPressSkip: action('onPressSkip'),
  },
} as ComponentMeta<typeof Skip>;

export const Primary: ComponentStory<typeof Skip> = args => <Skip {...args} />;
