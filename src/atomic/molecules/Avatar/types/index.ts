import { IButtonCameraProps } from '@atomic/atoms/ButtonCamera/types';

export interface IAvatarProps {
  testID?: string;
  url: string;
  withLabel?: string;
  type: 'integrator' | 'owner';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color: string;
  icon: string;
}

export type IProps = IAvatarProps & IButtonCameraProps;
