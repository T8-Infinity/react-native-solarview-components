import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { InputText } from '.';

export default {
  title: 'Atoms/InputText',
  component: InputText,
  args: {
    title: text('title', 'Botão'),
    onPress: action('onPress'),
    label: text('label', 'Input'),
    value: text('value', 'Teste'),
  },
} as ComponentMeta<typeof InputText>;

export const Primary: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);
