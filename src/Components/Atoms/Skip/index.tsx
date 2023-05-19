import React from 'react';
import { useTheme } from 'styled-components/native';
import { Typography } from '../Typography';
import { Container, Icone } from './styles';

interface ISkipProps {
  text: string;
  onPressSkip: () => void;
}

export const Skip: React.FC<ISkipProps> = ({ text, onPressSkip }) => {
  const { colors } = useTheme();
  return (
    <Container onPress={onPressSkip}>
      <Typography
        variant="Poppins_600SemiBold"
        text={text}
        color={colors.main}
      />
      <Icone name="chevron-right" />
    </Container>
  );
};
