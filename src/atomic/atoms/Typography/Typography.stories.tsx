import { ComponentMeta, StoryObj } from '@storybook/react-native';
import { color, text } from '@storybook/addon-knobs';
import { Typography } from '.';
import { ITextProps } from './types';

export default {
  title: 'Atoms/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Basic: StoryObj<ITextProps> = {
  args: {
    color: color('color', 'black'),
    text: text('text', 'Meu texto'),
    variant: 'ExtraBold',
    fontSize: 'lg',
  },
};
