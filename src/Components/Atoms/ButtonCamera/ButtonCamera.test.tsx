import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { provider as wrapper } from '@utils/provider';
import { IButtonCameraProps } from './types';

import { ButtonCamera } from '.';

describe('Atoms/ButtonCamera', () => {
  const elButtonCamera = 'ButtonCamera';

  const props: IButtonCameraProps = {
    color: 'red',
    icon: 'camera',
    onPress: jest.fn(),
  };

  const setup = () => {
    const utils = render(<ButtonCamera {...props} />, {
      wrapper,
    });
    const sut = utils.getByTestId(`${elButtonCamera}`);
    const sutButton = utils.getByTestId(`${elButtonCamera}_touch`);

    return {
      sut,
      sutButton,
      ...utils,
    };
  };

  it(`should render component ${elButtonCamera}`, () => {
    const { sut } = setup();
    expect(sut).toBeTruthy();
  });

  it(`should press button ${elButtonCamera}`, () => {
    const { sutButton } = setup();
    fireEvent(sutButton, 'press');
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });

  it('should render snapshot', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });
});
