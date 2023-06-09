/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';
import { theme } from '@theme/index';

export const withThemeProvider = (WrappedComponent: any) => ({
  children,
  ...others
}: Partial<{ children: any }>) => {
  const [_] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });
  return (
    <ThemeProvider theme={theme}>
      <WrappedComponent {...others}>{children}</WrappedComponent>
    </ThemeProvider>
  );
};
