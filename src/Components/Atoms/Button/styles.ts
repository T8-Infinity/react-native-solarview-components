import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { normalizePx } from '@utils/normalize';
import { RFValue } from 'react-native-responsive-fontsize';

type IProps = {
  backgroundColor?: string;
  outline?: boolean;
  borderColor?: string;
  colorTitle?: string;
};

export const Container = styled(TouchableOpacity)<IProps>`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${normalizePx(50)};
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}

  ${({ outline }) =>
    outline &&
    css`
      background-color: transparent;
      border-width: 1px;
      border-color: #1c1b1f1f;
    `}

  ${({ borderColor }) =>
    borderColor &&
    css`
      border-color: ${borderColor};
    `}

  border-radius: 5px;
  margin-bottom: ${normalizePx(16)};
  border-radius: 10px;
`;

export const Text = styled.Text<IProps>`
  text-align: center;
  font-size: ${RFValue(16)}px;
  ${({ colorTitle, theme }) =>
    colorTitle
      ? css`
          color: ${colorTitle};
        `
      : css`
          color: ${theme.colors.white};
        `};
`;

export const WrapperLoading = styled.View`
  width: 100%;
  align-self: center;
  justify-self: center;
  margin-bottom: ${normalizePx(13)};
`;
