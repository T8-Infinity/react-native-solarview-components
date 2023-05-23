import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@theme/index';

export const provider: React.FC = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
