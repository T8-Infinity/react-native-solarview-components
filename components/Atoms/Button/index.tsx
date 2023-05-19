import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacityProps, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components/native';
import { ActivityIndicatorLoading } from '../Loading';
import { Container, ContainerGradiente, ImagemContainer, Text } from './styles';

export interface IButtonProps extends TouchableOpacityProps {
  title: string;
  icone?: React.FC<SvgProps>;
  loading?: boolean;
  borderRadios?: boolean;
  colorTitle?: string;
  borderColor?: boolean;
  onPress: () => void;
  backgroundColor?: string;
  gradient?: boolean;
}

export function Button({
  title,
  icone: Icone,
  borderRadios,
  loading,
  colorTitle,
  onPress,
  backgroundColor,
  gradient,
  ...rest
}: IButtonProps) {
  const { colors, gradient: gradiente } = useTheme();

  if (gradient) {
    return (
      <ContainerGradiente
        borderRadios={borderRadios}
        onPress={onPress}
        backgroundColor={backgroundColor}
        testID="Button"
        {...rest}
      >
        <LinearGradient
          colors={gradiente.primary}
          start={[0, 1]}
          end={[1, 0]}
          style={styles.button}
        >
          {loading ? (
            <ActivityIndicatorLoading color={colors.white} size="small" />
          ) : (
            <Text colorTitle={colorTitle}>{title.toUpperCase()}</Text>
          )}
        </LinearGradient>
      </ContainerGradiente>
    );
  }

  return (
    <Container
      borderRadios={borderRadios}
      onPress={onPress}
      backgroundColor={backgroundColor}
      testID="Button"
      {...rest}
    >
      <ImagemContainer>{Icone && <Icone />}</ImagemContainer>
      {loading ? (
        <ActivityIndicatorLoading color={colors.white} size="small" />
      ) : (
        <Text colorTitle={colorTitle}>{title.toUpperCase()}</Text>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
});
