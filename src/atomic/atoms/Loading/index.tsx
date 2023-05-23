import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container } from './styles';

interface Props extends ActivityIndicatorProps {
  size: 'large' | 'small';
  color?: string;
}

export function Loading({ size, color }: Props) {
  const { colors } = useTheme();
  return (
    <Container>
      <ActivityIndicator color={color || colors.white} size={size} />
    </Container>
  );
}
