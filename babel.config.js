module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    "plugins": [
      ['react-native-reanimated/plugin'],
      ["module-resolver", {
        "root": ["./src"],
        "alias": {
          '@assets': './src/assets',
          '@atomic': './src/atomic',
          '@intro': './src/intro',
          '@introduction': './src/introduction',
          '@docs': './src/docs',
          '@theme': './src/theme',
          '@utils': './src/utils',
        }
      }
    ],
    ]
  };
};
