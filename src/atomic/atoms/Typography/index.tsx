import React from 'react';
import { fonts } from '@theme/fonts';
import { size } from '@theme/size';
import { Text } from './styles';
import { ITextProps } from './types';

export const Typography: React.FC<ITextProps> = ({
  text,
  variant = 'Medium',
  fontSize,
  color,
}) => {
  return (
    <Text variant={fonts[variant]} fontSize={size[fontSize]} color={color}>
      {text}
    </Text>
  );
};
