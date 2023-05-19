import { create, themes } from '@storybook/theming';

export const themeProvider = create({
  ...themes.length,
  base: 'light',    
 });