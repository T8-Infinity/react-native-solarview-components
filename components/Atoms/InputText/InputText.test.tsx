/* eslint-disable camelcase */
import React from 'react';
import { render } from '@testing-library/react-native';
import { provider as wrapper } from '../../utils/provider';
import { InputText, InputTextProps } from '.';

describe('Atoms/Button', () => {
  const elInputText = 'InputText';

  const props: InputTextProps = {
    label: 'teste',
    value: '',
    onChangeText: jest.fn(),
  };

  const setup = () => {
    const utils = render(<InputText {...props} />, {
      wrapper,
    });

    const sut = utils.getByTestId(elInputText);

    return {
      sut,
      ...utils,
    };
  };

  it(`should render component #${elInputText}`, () => {
    const { sut } = setup();
    expect(sut).toBeTruthy();
  });
});
