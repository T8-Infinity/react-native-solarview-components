import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Typography } from '.';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  args: {
    text: 'Meu texto',
  },
} as ComponentMeta<typeof Typography>;

export const Primary: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);
