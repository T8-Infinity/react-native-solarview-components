module.exports = {
  stories: [
    '../src/Docs/**/*.stories.mdx',
    '../src/Docs/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/**/*.stories.mdx',
    '../src/Components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-mdx-gfm'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
