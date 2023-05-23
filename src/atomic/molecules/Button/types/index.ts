import { TouchableOpacityProps } from 'react-native';

export interface IPropsButton extends TouchableOpacityProps {
  testID?: string;
  title: string;
  loading?: boolean;
  colorTitle?: string;
  onPress: () => void;
  backgroundColor?: string;
  outline?: boolean;
  disabled?: boolean;
  borderColor?: string;
  icon?: string;
}
