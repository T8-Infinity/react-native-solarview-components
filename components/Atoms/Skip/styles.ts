import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const Icone = styled(Feather)`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.main};
`;
