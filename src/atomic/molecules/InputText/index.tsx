import React, { useCallback, useEffect, useState } from 'react';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  BoxIcon,
  BoxInput,
  ButtonIcon,
  ErrorMessage,
  Icon,
  Input,
  InputWrapper,
  LabelText,
  Error,
} from './styles';
import { Props } from './types';

export function InputText({
  title,
  value,
  inputRef,
  label,
  onChangeText,
  colorTitle,
  touched,
  secret,
  icon,
  errorMessage,
  ...rest
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [_, setFocused] = useState(false);
  const labelAnimate = useSharedValue(0);

  const handleFocus = () => {
    labelAnimate.value = withTiming(-17, {
      duration: 200,
    });
    setFocused(true);
  };

  const handleBlur = useCallback(() => {
    if (value !== '') {
      setFocused(false);
      labelAnimate.value = withTiming(-17, {
        duration: 200,
      });
      return;
    }
    labelAnimate.value = withTiming(0, {
      duration: 200,
    });
  }, [labelAnimate, value]);

  const handleClickLabelFocus = () => {
    inputRef?.current?.focus();
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const rLabelStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: labelAnimate.value },
        { translateX: interpolate(labelAnimate.value, [0, -17], [0, -5]) },
      ],
      fontSize: interpolate(labelAnimate.value, [0, -17], [14, 10]),
    };
  });

  useEffect(() => {
    handleBlur();
  }, [handleBlur]);

  return (
    <>
      <InputWrapper>
        <BoxInput>
          <Input
            ref={inputRef}
            placeholderTextColor={touched ? 'red' : '#868E96'}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secret && !showPassword}
            touched={touched}
            {...rest}
          />

          <LabelText
            style={rLabelStyle}
            touched={touched}
            onPress={handleClickLabelFocus}
          >
            {label}
          </LabelText>
          {icon && (
            <BoxIcon>
              {secret ? (
                <ButtonIcon onPress={handleShowPassword}>
                  <Icon
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={24}
                    color="black"
                  />
                </ButtonIcon>
              ) : (
                <Icon name={icon} size={23} color="black" />
              )}
            </BoxIcon>
          )}
        </BoxInput>
      </InputWrapper>
      {errorMessage && (
        <Error>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </Error>
      )}
    </>
  );
}
