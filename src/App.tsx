/* eslint-disable camelcase */
import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Platform, StatusBar, View } from 'react-native';
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
import Apploading from 'expo-app-loading';
import { theme } from '@theme/index';
import StorybookUIRoot from '../.ondevice/Storybook';

export default function App() {
  const [fontsLoaded] = useFonts({
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

  if (!fontsLoaded) {
    return <Apploading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <View
        style={{
          flex: 1,
          marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}
      >
        <StorybookUIRoot />
      </View>
    </ThemeProvider>
  );
}
