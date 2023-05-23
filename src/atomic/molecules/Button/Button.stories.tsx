import { ComponentMeta, StoryObj } from '@storybook/react-native';
import { text, boolean, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button } from '.';
import { IPropsButton } from './types';

export default {
  title: 'Molecules/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: StoryObj<Omit<IPropsButton, 'testID'>> = {
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
export const Secondary: StoryObj<Omit<IPropsButton, 'testID'>> = {
  args: {
    title: 'Success',
    loading: boolean('loading', false),
    colorTitle: color('colorTitle', 'white'),
    onPress: action('pressed'),
    backgroundColor: '#22c55e',
    outline: boolean('outline', false),
    disabled: boolean('disabled', false),
    borderColor: color('border', 'black'),
  },
};
export const Tertiary: StoryObj<Omit<IPropsButton, 'testID'>> = {
  args: {
    title: 'Warning',
    loading: boolean('loading', false),
    colorTitle: color('colorTitle', 'white'),
    onPress: action('pressed'),
    backgroundColor: '#FFBF4D',
    outline: boolean('outline', false),
    disabled: boolean('disabled', false),
    borderColor: color('border', 'black'),
  },
};
export const Info: StoryObj<Omit<IPropsButton, 'testID'>> = {
  args: {
    title: 'Info',
    loading: boolean('loading', false),
    colorTitle: color('colorTitle', 'white'),
    onPress: action('pressed'),
    backgroundColor: '#7dd3fc',
    outline: boolean('outline', false),
    disabled: boolean('disabled', false),
    borderColor: color('border', 'black'),
  },
};
export const Error: StoryObj<Omit<IPropsButton, 'testID'>> = {
  args: {
    title: 'Error',
    loading: boolean('loading', false),
    colorTitle: color('colorTitle', 'white'),
    onPress: action('pressed'),
    backgroundColor: '#f43f5e',
    outline: boolean('outline', false),
    disabled: boolean('disabled', false),
    borderColor: color('border', 'black'),
  },
};

export const Loading: StoryObj<Omit<IPropsButton, 'testID'>> = {
  args: {
    title: 'Error',
    loading: boolean('true', true),
    colorTitle: color('colorTitle', 'white'),
    onPress: action('pressed'),
    backgroundColor: '#008868',
    outline: boolean('outline', false),
    disabled: boolean('disabled', false),
    borderColor: color('border', 'black'),
  },
};

export const ButtonIcon: StoryObj<Omit<IPropsButton, 'testID'>> = {
  args: {
    title: 'Button',
    loading: boolean('false', false),
    colorTitle: color('colorTitle', 'white'),
    onPress: action('pressed'),
    backgroundColor: '#008868',
    outline: boolean('outline', false),
    disabled: boolean('disabled', false),
    borderColor: color('border', 'black'),
    icon: 'checkmark-done',
  },
};
