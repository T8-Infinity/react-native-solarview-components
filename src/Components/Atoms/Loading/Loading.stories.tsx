import React from 'react';
import { select } from '@storybook/addon-knobs';

import { Loading } from '.';

// import { Controller, useForm } from 'react-hook-form'
export default {
  title: 'Atoms/Loading',
};

export const normal = () => (
  <Loading size={select('size', ['large', 'small'], 'large')} />
);
