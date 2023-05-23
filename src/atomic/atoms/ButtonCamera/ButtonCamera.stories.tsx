import { ComponentMeta, StoryObj } from '@storybook/react-native';
import { color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ButtonCamera } from '.';
import { IButtonCameraProps } from './types';

export default {
  title: 'Atoms/ButtonCamera',
  component: ButtonCamera,
} as ComponentMeta<typeof ButtonCamera>;

export const Basic: StoryObj<IButtonCameraProps> = {
  args: {
    color: color('color', 'green'),
    icon: 'camera',
    onPress: action('press'),
  },
};
