import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@theme/index';

export const provider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
