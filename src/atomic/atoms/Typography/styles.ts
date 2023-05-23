import styled from 'styled-components/native';

interface IFontsProps {
  variant: string;
  fontSize: any;
  color?: string;
}

export const Text = styled.Text<IFontsProps>`
  font-family: ${({ variant }) => variant};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ theme, color }) => color || theme.colors.black};
`;
