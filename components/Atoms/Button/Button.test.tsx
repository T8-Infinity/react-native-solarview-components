/* eslint-disable camelcase */
import React from 'react';
import { render } from '@testing-library/react-native';
import { provider as wrapper } from '../../utils/provider';
import { Button, IButtonProps } from '.';

describe('Atoms/Button', () => {
  const elButton = 'Button';

  const props: IButtonProps = {
    title: 'teste',
    onPress: jest.fn(),
    gradient: true,
  };

  const setup = () => {
    const utils = render(<Button {...props} />, {
      wrapper,
    });

    const sut = utils.getByTestId(elButton);

    return {
      sut,
      ...utils,
    };
  };

  it(`should render component #${elButton}`, () => {
    const { sut } = setup();
    expect(sut).toBeTruthy();
  });
});
