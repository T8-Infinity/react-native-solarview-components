import React from 'react';
import { select } from '@storybook/addon-knobs';

import { Loading } from '.';

export default {
  title: 'Atoms/Loading',
};

export const Basic = () => (
  <Loading size={select('size', ['large', 'small'], 'large')} />
);
