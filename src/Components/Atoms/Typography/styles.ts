import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IFontsProps {
  variant: string;
  size: number;
  color?: string;
}

export const Text = styled.Text<IFontsProps>`
  font-family: ${({ theme, variant }) => variant || theme.fonts.Regular};
  font-size: ${({ size }) => RFValue(size) || RFValue(16)}px;
  color: ${({ theme, color }) => color || theme.colors.black};
`;
