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
          '@components': './src/components',
          '@intro': './src/intro',
          '@introduction': './src/introduction',
          '@docs': './src/docs',
          '@theme': './src/theme',
          '@utils': './src/utils',
        }
      }
    ],
    ['module:react-native-dotenv', {
      "moduleName": "@env",
      "path": ".env",
      "blacklist": null,
      "whitelist": null,
      "safe": false,
      "allowUndefined": true
    }]
    ]
  };
};
