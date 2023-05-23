import { ComponentMeta, StoryObj } from '@storybook/react-native';
import { InputText } from '.';
import { InputTextProps } from './types';

export default {
  title: 'molecules/InputText',
  component: InputText,
} as ComponentMeta<typeof InputText>;

export const Basic: StoryObj<InputTextProps> = {
  args: {
    title: 'Label',
    label: 'Nome',
  },
};
