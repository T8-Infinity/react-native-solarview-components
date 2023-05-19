import React from 'react';
import { select } from '@storybook/addon-knobs';

import { ActivityIndicatorLoading } from '.';

// import { Controller, useForm } from 'react-hook-form'
export default {
  title: 'Atoms/Loading',
};

export const normal = () => (
  <ActivityIndicatorLoading
    size={select('size', ['large', 'small'], 'large')}
  />
);
