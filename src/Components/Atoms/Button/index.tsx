import React from 'react';
import { Container, Text, WrapperLoading } from './styles';
import { IPropsButton } from './types';
import { Loading } from '../Loading';

export function Button({
  backgroundColor = '#0EA082',
  borderColor,
  colorTitle,
  disabled,
  loading,
  onPress,
  outline,
  title = 'ok',
  testID,
  ...rest
}: IPropsButton) {
  return (
    <Container
      testID={`${testID}_ButtonComponent`}
      onPress={onPress}
      backgroundColor={backgroundColor}
      outline={outline}
      disabled={disabled}
      borderColor={borderColor}
      {...rest}
    >
      {loading ? (
        <>
          <WrapperLoading>
            <Loading color="black" size="small" />
          </WrapperLoading>
        </>
      ) : (
        <Text colorTitle={colorTitle}>{title}</Text>
      )}
    </Container>
  );
}
