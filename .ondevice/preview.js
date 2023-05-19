import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import {  Appearance } from 'react-native';


export const decorators = [withBackgrounds];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  my_param: 'anything',
  backgrounds: {
    default: Appearance.getColorScheme() === 'dark' ? 'dark' : 'plain',
    values: [
      { name: 'plain', value: 'white' },
      { name: 'dark', value: '#333' },
      { name: 'app', value: '#eeeeee' },
    ],
  },
};
