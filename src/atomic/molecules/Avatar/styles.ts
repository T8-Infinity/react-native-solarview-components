import styled, { css } from 'styled-components/native';
import { Image } from 'react-native';
import { normalizePx } from '@utils/normalize';

type IAvatarPropsSize = {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  type?: 'integrator' | 'owner';
};

export const Container = styled.View``;

export const ImageAvatar = styled(Image)<IAvatarPropsSize>`
  border-radius: ${({ theme }) => normalizePx(theme.rounded['2xl'])};

  ${({ theme, type }) => {
    switch (type) {
      case 'integrator':
        return css`
          border-width: 3px;
          border-color: ${theme.colors.primaryColor};
        `;
      case 'owner':
        return css`
          border-width: 3px;
          border-color: ${theme.colors.secondaryColor};
        `;

      default:
        return css`
          border-width: 3px;
          border-color: ${theme.colors.black};
        `;
    }
  }};

  ${({ size, theme }) => {
    switch (size) {
      case 'xs':
        return css`
          width: ${normalizePx(theme.size['2xl'])};
          height: ${normalizePx(theme.size['2xl'])};
        `;
      case 'sm':
        return css`
          width: ${normalizePx(theme.size['4xl'])};
          height: ${normalizePx(theme.size['4xl'])};
        `;
      case 'md':
        return css`
          width: ${normalizePx(theme.size['6xl'])};
          height: ${normalizePx(theme.size['6xl'])};
        `;
      case 'lg':
        return css`
          width: ${normalizePx(theme.size['8xl'])};
          height: ${normalizePx(theme.size['8xl'])};
        `;
      case 'xl':
        return css`
          width: ${normalizePx(theme.size['9xl'])};
          height: ${normalizePx(theme.size['9xl'])};
        `;
      default:
        return css`
          width: ${normalizePx(theme.size['8xl'])};
          height: ${normalizePx(theme.size['8xl'])};
        `;
    }
  }};
`;

export const WrapperIcon = styled.View<IAvatarPropsSize>`
  ${({ size, theme }) => {
    switch (size) {
      case 'xs':
        return css`
          display: none;
        `;
      case 'sm':
        return css`
          display: none;
        `;
      case 'md':
        return css`
          display: none;
        `;
      case 'lg':
        return css`
          position: absolute;
          width: ${normalizePx(theme.size['2xl'])};
          height: ${normalizePx(theme.size['2xl'])};
          border-radius: ${normalizePx(theme.rounded.lg)};
          align-items: center;
          justify-content: center;
          bottom: ${normalizePx(7)};
          left: ${normalizePx(70)};
        `;
      case 'xl':
        return css`
          position: absolute;
          width: ${normalizePx(theme.size['2xl'])};
          height: ${normalizePx(theme.size['2xl'])};
          border-radius: ${normalizePx(theme.rounded.lg)};
          align-items: center;
          justify-content: center;
          bottom: ${normalizePx(14)};
          left: ${normalizePx(100)};
        `;
      default:
        return css`
          display: none;
        `;
    }
  }};
`;
