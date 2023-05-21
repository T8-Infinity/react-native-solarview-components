import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import {themeProvider} from './themeProvider';
import { ThemeProvider } from 'styled-components/native';
import {theme} from '../src/theme'
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


const queryParams = new URLSearchParams(window.location.search);

if (queryParams.has('hideHeader')) {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = `
    .sbdocs-title, .sbdocs-title + * {
      display: none;
    }
  `;
  document.head.appendChild(styleSheet);
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themeProvider,
    source: {
      state: 'open',
    },
  },

  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

const withThemeProvider=(Story,context)=>{
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

  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider];



