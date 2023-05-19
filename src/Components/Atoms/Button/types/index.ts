import { TouchableOpacityProps } from 'react-native';

export interface IPropsButton extends TouchableOpacityProps {
  title: string | undefined;
  loading?: boolean;
  colorTitle?: string;
  onPress: (() => void) | undefined;
  backgroundColor?: string;
  outline?: boolean;
  disabled?: boolean;
  borderColor?: string;
  testID?: string;
}
