import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { normalizePx } from '~/utils/normalize';
import { RFValue } from 'react-native-responsive-fontsize';

interface IProps {
  touched?: boolean;
}

export const InputWrapper = styled.View<IProps>`
  width: 100%;
  justify-content: center;
  margin-bottom: ${normalizePx(12)};
  ${({ theme, touched }) =>
    touched &&
    css`
      border-width: 2px;
      border-color: ${theme.colors.error}
      border-radius: 13px;
      border-width: 2px;
      height: ${normalizePx(58)};
    `}
`;

export const BoxInput = styled.View`
  width: 100%;
  justify-content: center;
`;

export const Input = styled(TextInput)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding-top: ${normalizePx(12)};
  padding-bottom: ${normalizePx(12)};
  padding-left: ${normalizePx(20)};
  padding-right: ${normalizePx(50)};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(14)}px;
  height: ${normalizePx(55)};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.grafit};
`;

export const LabelText = styled(Animated.Text)<IProps>`
  position: absolute;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Poppins400Regular};
  font-size: ${RFValue(18)}px;
  left: ${normalizePx(20)};
  ${({ theme, touched }) =>
    touched &&
    css`
      color: ${theme.colors.error};
    `}
`;

export const BoxIcon = styled.View`
  position: absolute;
  right: ${normalizePx(15)};
`;

export const ButtonIcon = styled(TouchableOpacity)``;

export const Icon = styled(Feather)`
  font-size: ${RFValue(22)}px;
`;

export const Error = styled.View`
  position: relative;
  bottom: ${normalizePx(8)};
`;

export const ErrorMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins500Medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.error};
`;
