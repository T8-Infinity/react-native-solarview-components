import React from 'react';
import { Button, Container, Icon, WrapperIcon } from './styles';
import { IButtonCameraProps } from './types';

export function ButtonCamera({
  testID = 'ButtonCamera',
  icon,
  onPress,
  color,
  ...rest
}: IButtonCameraProps) {
  return (
    <Container testID={`${testID}`}>
      <Button onPress={onPress} {...rest} testID={`${testID}_touch`}>
        <WrapperIcon color={color}>
          <Icon name={icon || 'camera'} />
        </WrapperIcon>
      </Button>
    </Container>
  );
}
