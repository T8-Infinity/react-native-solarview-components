import React from 'react';
import { ComponentStory } from '@storybook/react-native';
import { Typography } from '.';

export default {
  title: 'Atoms/Typography',
};

export const Primary: ComponentStory<typeof Typography> = args => (
  <Typography {...args} />
);
