import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container } from './styles';
import { Props } from './types';

export function Loading({ testID = 'Loading', size, color }: Props) {
  const { colors } = useTheme();
  return (
    <Container testID={`${testID}`}>
      <ActivityIndicator color={color || colors.white} size={size} />
    </Container>
  );
}
