import { TouchableOpacityProps } from 'react-native';

export interface IPropsButton extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  colorTitle?: string;
  onPress: () => void;
  backgroundColor?: string;
  outline?: boolean;
  disabled?: boolean;
  borderColor?: string;
  testID?: string;
  icon: string;
}
