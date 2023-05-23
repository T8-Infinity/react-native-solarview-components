import { MaterialCommunityIcons } from '@expo/vector-icons';
import { normalizePx } from '@utils/normalize';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type IColorButton = {
  color: string;
};

export const Container = styled.View`
  width: 100%;
`;

export const Button = styled(TouchableOpacity)``;

export const WrapperIcon = styled.View<IColorButton>`
  width: ${({ theme }) => normalizePx(theme.size['2xl'])};
  height: ${({ theme }) => normalizePx(theme.size['2xl'])};
  background-color: ${({ theme, color }) => color || theme.colors.primaryColor};
  border-radius: ${({ theme }) => normalizePx(theme.rounded.lg)};
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  color: theme.colors.white,
  size: theme.size.lg,
}))``;
