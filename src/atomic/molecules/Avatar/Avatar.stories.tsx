import { ComponentMeta, StoryObj } from '@storybook/react-native';
import { color } from '@storybook/addon-knobs';
import { Avatar } from '.';
import { IAvatarProps } from './types';

export default {
  title: 'Molecules/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Basic: StoryObj<IAvatarProps> = {
  args: {
    url:
      'https://ui-avatars.com/api/?name=Dan+Almeida&background=5B4699&color=fff',
    type: 'integrator',
    color: color('color', '#008868'),
    icon: 'camera',
    size: 'lg',
  },
};
