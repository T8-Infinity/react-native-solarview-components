import { color, select } from '@storybook/addon-knobs';

import { ComponentMeta, StoryObj } from '@storybook/react-native';
import { Loading } from '.';
import { Props } from './types';

export default {
  title: 'Atoms/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;

export const Basic: StoryObj<Props> = {
  args: {
    color: color('color', 'black'),
    size: select('size', ['large', 'small'], 'large'),
  },
};
