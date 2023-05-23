import { ComponentMeta, StoryObj } from '@storybook/react-native';
import { text, boolean, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button } from '.';
import { IPropsButton } from './types';

export default {
  title: 'Molecules/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: StoryObj<IPropsButton> = {
  args: {
    title: text('text', 'Button'),
    loading: boolean('loading', false),
    colorTitle: color('colorTitle', 'white'),
    onPress: action('pressed'),
    backgroundColor: color('backgroundColor', 'green'),
    outline: boolean('outline', false),
    disabled: boolean('disabled', false),
    borderColor: color('border', 'black'),
  },
};
