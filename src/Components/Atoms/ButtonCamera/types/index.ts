import { TouchableOpacityProps } from 'react-native';

export interface IButtonCameraProps extends TouchableOpacityProps {
  testID?: string;
  icon: string;
  onPress: () => void;
  color: string;
}
