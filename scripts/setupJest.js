import 'jest-styled-components/native';
import 'react-native-gesture-handler/jestSetup';
import 'stacktrace-parser';

// jest.mock('react-native-safe-area-view', () => {
//   const Reanimated = require('react-native-safe-area-view');

//   // The mock for `call` immediately calls the callback which is incorrect
//   // So we override it with a no-op
//   Reanimated.default.call = () => {};

//   return Reanimated;
// });

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/Utilities/Platform', () => {
    const Platform = jest.requireActual('react-native/Libraries/Utilities/Platform');
    Platform.constants.reactNativeVersion = { major: 0, minor: 66, patch: 0 };
    return Platform;
  });

global.__reanimatedWorkletInit = jest.fn();
jest.mock('react-native-reanimated', () => {
  const mock = require("react-native-reanimated/mock");
  mock.default.call = () => {};

  return {
    ...mock,
    useAnimatedProps: jest.fn,
  };
})

global.window = {}
global.window = global
