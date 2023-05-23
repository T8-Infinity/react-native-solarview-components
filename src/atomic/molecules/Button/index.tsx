import React from 'react';
import { Loading } from '@atomic/atoms/Loading';
import { Typography } from '@atomic/atoms/Typography';
import { Container, WrapperInput, WrapperLoading } from './styles';
import { IPropsButton } from './types';

export function Button({
  backgroundColor = '#0EA082',
  borderColor,
  colorTitle = 'white',
  disabled,
  loading,
  onPress,
  outline,
  title = 'ok',
  testID = 'Button',
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
        <>
          <WrapperInput>
            <Typography
              color={colorTitle}
              text={title}
              variant="Poppins_400Regular"
            />
          </WrapperInput>
        </>
      )}
    </Container>
  );
}
