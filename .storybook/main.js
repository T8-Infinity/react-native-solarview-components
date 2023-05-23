module.exports = {
  stories: [
    '../src/introduction/**/*.stories.mdx',
    '../src/introduction/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/atomic/**/*.stories.mdx',
    '../src/atomic/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/docs/**/*.stories.mdx',
    '../src/docs/**/*.stories.@(js|jsx|ts|tsx)',
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
