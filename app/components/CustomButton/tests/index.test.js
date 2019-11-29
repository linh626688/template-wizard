import CustomButton from '../index';

import { mount } from 'enzyme';
import React from 'react';

const renderComponent = (props = {}) =>
  mount(
    <CustomButton
      size="md"
      type="secondary"
      name="Previous" {...props}>
    </CustomButton>,
  );
const children = <span>Previous</span>;

describe('<CustomButton />', () => {
  it('should render CustomButton', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent({ onClick: onClickSpy });
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
  it('should have name', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
