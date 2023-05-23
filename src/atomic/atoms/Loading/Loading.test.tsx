import React from 'react';
import { render } from '@testing-library/react-native';
import { provider as wrapper } from '@utils/provider';
import { Props } from './types';

import { Loading } from '.';

describe('Atoms/Loading', () => {
  const elLoading = 'Loading';

  const props: Props = {
    size: 'small',
    color: 'black',
  };

  const setup = () => {
    const utils = render(<Loading {...props} />, {
      wrapper,
    });
    const sut = utils.getByTestId(`${elLoading}`);

    return {
      sut,
      ...utils,
    };
  };

  it(`should be able to render component ${elLoading}`, () => {
    const { sut } = setup();
    expect(sut).toBeTruthy();
  });

  it('should render snapshot', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });
});
