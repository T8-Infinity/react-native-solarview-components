import { TextInput, TextInputProps } from 'react-native';

export interface InputTextProps extends TextInputProps {
  title: string;
  value: string;
  label?: string;
  icon?: string;
  secret?: boolean;
  touched?: boolean;
  errorMessage?: string;
  onChangeText: (e: any) => void;
  handlePressIcon?: () => void;
  colorTitle?: string;
}

export type Props = InputTextProps & {
  inputRef?: React.RefObject<TextInput>;
};

export interface InputTypesProps {
  colorTitle?: string;
  touched?: boolean;
}
