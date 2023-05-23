import React from 'react';
import { ButtonCamera } from '@atomic/atoms/ButtonCamera';
import { Container, ImageAvatar, WrapperIcon } from './styles';
import { IProps } from './types';

export function Avatar({
  testID = 'Avatar',
  size,
  type,
  url,
  color,
  icon,
  onPress,
}: IProps) {
  return (
    <Container testID={`${testID}`}>
      <ImageAvatar
        source={{
          uri: url,
        }}
        resizeMode="contain"
        size={size}
        type={type}
        testID={`${testID}_image`}
      />
      {icon && onPress && (
        <WrapperIcon size={size}>
          <ButtonCamera
            color={color}
            icon={icon}
            onPress={onPress}
            testID={`${testID}_button`}
          />
        </WrapperIcon>
      )}
    </Container>
  );
}
