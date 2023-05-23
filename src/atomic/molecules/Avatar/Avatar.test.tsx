import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { provider as wrapper } from '@utils/provider';
import { IProps } from './types';

import { Avatar } from '.';

describe('Molecules/Avatar', () => {
  const elAvatar = 'Avatar';

  const props: IProps = {
    color: '',
    icon: 'camera',
    onPress: jest.fn(),
    size: 'lg',
    type: 'integrator',
    url: '',
  };

  const setup = () => {
    const utils = render(<Avatar {...props} />, {
      wrapper,
    });
    const sut = utils.getByTestId(`${elAvatar}`);
    const sutImage = utils.getByTestId(`${elAvatar}_image`);
    const sutButton = utils.getByTestId(`${elAvatar}_button`);

    return {
      sut,
      sutImage,
      sutButton,
      ...utils,
    };
  };

  it(`should render component ${elAvatar}`, () => {
    const { sut } = setup();
    expect(sut).toBeTruthy();
  });

  it(`should press button ${elAvatar}`, () => {
    const { sutButton } = setup();
    fireEvent(sutButton, 'press');
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });

  it(`should be able render image ${elAvatar}`, () => {
    const { sutImage } = setup();
    expect(sutImage).toBeTruthy();
  });

  it(`should be able to test conditional ${elAvatar}`, async () => {
    const { sutImage } = setup();
    props.icon.length > 0;
    expect(sutImage).toBeTruthy();
  });

  it('should render snapshot', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });
});
