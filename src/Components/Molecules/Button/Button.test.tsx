/* eslint-disable camelcase */
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { provider as wrapper } from '@utils/provider';
import { Button } from '.';
import { IPropsButton } from './types';

describe('Molecules/Button', () => {
  const elButton = 'Button';

  const props: IPropsButton = {
    title: 'teste',
    onPress: jest.fn(),
    icon: '',
  };

  const setup = () => {
    const utils = render(<Button {...props} />, {
      wrapper,
    });

    const sut = utils.getByTestId(`${elButton}_ButtonComponent`);

    return {
      sut,
      ...utils,
    };
  };

  it(`should render component #${elButton}`, () => {
    const { sut } = setup();
    expect(sut).toBeTruthy();
  });

  it(`should press button ${elButton}`, () => {
    const { sut } = setup();
    fireEvent(sut, 'press');
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });

  it('should render snapshot', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });
});
