import React from 'react';
import { normalizePx } from '@utils/normalize';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text } from './styles';

interface ITextProps {
  text: string;
  size?: number;
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
  size = RFValue(16),
  color,
}) => {
  return (
    <Text variant={variant} size={size} color={color}>
      {text}
    </Text>
  );
};
