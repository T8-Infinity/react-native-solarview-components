import { ActivityIndicatorProps } from 'react-native';

export interface Props extends ActivityIndicatorProps {
  testID?: string;
  size: 'large' | 'small';
  color?: string;
}
