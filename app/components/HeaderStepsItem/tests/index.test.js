import { mount } from 'enzyme';
import React from 'react';
import HeaderStepsItem, { WizardCard } from '../index';

const renderComponent = (props = {}) =>
  mount(
    <HeaderStepsItem
      stepIdx={1}
      name="Select Service"
      icon="ti-package"
      {...props}
    />,
  );

describe('<HeaderStepsItem />', () => {
  it('should able click Steps', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent({ onClickStep: onClickSpy });
    renderedComponent.find(WizardCard).simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
  it('should render the icon', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.ti-package')).toHaveLength(1);
  });
});
