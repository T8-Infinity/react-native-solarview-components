import React from 'react';
import { Text } from './styles';

interface ITextProps {
  text: string;
  size: number;
  color?: string;
  variant:
    | 'Poppins_100Thin'
    | 'Poppins_200ExtraLight'
    | 'Poppins_400Regular'
    | 'Poppins_300Light'
    | 'Poppins_500Medium'
    | 'Poppins_600SemiBold'
    | 'Poppins_700Bold'
    | 'Poppins_800ExtraBold'
    | 'Poppins_900Black';
}

export const Typography: React.FC<ITextProps> = ({
  text,
  variant,
  size,
  color,
}) => {
  return (
    <Text variant={variant} size={size} color={color}>
      {text}
    </Text>
  );
};
