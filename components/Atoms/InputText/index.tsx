import React, { useCallback, useEffect, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components';
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

export interface InputTextProps extends TextInputProps {
  value: string;
  label: string;
  icon?: string;
  secret?: boolean;
  touched?: boolean;
  errorMessage?: string;
  onChangeText: (e: string) => void;
  handlePressIcon?: () => void;
}

type Props = InputTextProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function InputText({
  label,
  value,
  icon,
  onChangeText,
  touched,
  secret = false,
  inputRef,
  errorMessage,
  ...rest
}: Props) {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const labelAnimate = useSharedValue(0);
  const handleFocus = () => {
    labelAnimate.value = withTiming(-17, {
      duration: 200,
    });
  };

  const handleBlur = useCallback(() => {
    if (value !== '') {
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
      fontSize: interpolate(labelAnimate.value, [0, -17], [12, 9]),
    };
  });

  useEffect(() => {
    handleBlur();
  }, [handleBlur]);

  return (
    <>
      <InputWrapper touched={touched}>
        <BoxInput>
          <Input
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secret && !showPassword}
            testID="InputText"
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
                    color={theme.colors.black}
                  />
                </ButtonIcon>
              ) : (
                <Icon name={icon} size={23} color={theme.colors.black} />
              )}
            </BoxIcon>
          )}
        </BoxInput>
      </InputWrapper>
      {touched && (
        <Error>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </Error>
      )}
    </>
  );
}
