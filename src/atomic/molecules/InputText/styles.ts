import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { normalizePx } from '@utils/normalize';
import { RFValue } from 'react-native-responsive-fontsize';
import { InputTypesProps } from './types';

export const InputWrapper = styled.View`
  width: 100%;
  justify-content: center;
  margin-bottom: ${normalizePx(16)};
`;

export const Title = styled.Text<InputTypesProps>`
  margin-bottom: 8px;
  ${({ colorTitle, theme }) =>
    colorTitle
      ? css`
          color: ${colorTitle};
        `
      : css`
          color: ${theme.colors.white};
        `}
`;

export const BoxInput = styled.View`
  width: 100%;
  justify-content: center;
  border-width: 1px;
  border-radius: 4px;
`;

export const Input = styled(TextInput)<InputTypesProps>`
  border-radius: 4px;
  padding-top: ${normalizePx(12)};
  padding-bottom: ${normalizePx(12)};
  padding-left: ${normalizePx(20)};
  padding-right: ${normalizePx(50)};
  color: ${({ theme }) => theme.colors.placeholder};
  font-size: ${RFValue(14)}px;
  height: ${normalizePx(56)};
  border-width: 1px;
  border-color: #ccc;
  ${({ touched }) =>
    touched &&
    css`
      border-width: 2px;
      border-color: red
      border-radius: 10px;
      border-width: ${normalizePx(2)};
      height: 52px;
    `}
  ${({ editable, theme }) =>
    !editable &&
    css`
      color: ${theme.colors.dark};
    `}
`;

export const LabelText = styled(Animated.Text)<InputTypesProps>`
  position: absolute;
  top: 11px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.placeholder};
  left: 20px;
  ${({ touched }) =>
    touched &&
    css`
      color: red;
    `}
`;

export const BoxIcon = styled.View`
  position: absolute;
  right: 15px;
`;

export const ButtonIcon = styled(TouchableOpacity)``;

export const Icon = styled(Feather)`
  font-size: 22px;
  color: #79868e96;
`;

export const Error = styled.View`
  position: relative;
  bottom: 8px;
`;

export const ErrorMessage = styled.Text`
  font-size: 14px;
  color: red;
`;
