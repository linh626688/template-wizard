// import ModalWarning from '../index';
import { mount } from 'enzyme';
import React from 'react';
import { Button } from 'reactstrap';
import ModalWarning from '../index';
import { TYPE_WARNING } from '../../../const/Constant';

const renderComponent = (props = {}) =>
  mount(
    <ModalWarning
      isOpen
      type={TYPE_WARNING.ERROR}
      body="There are some errors in your submission. Please correct them."
      {...props}
    />,
  );

describe('<ModalWarning />', () => {
  it('should able click button on Modal', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent({ toggle: onClickSpy });
    renderedComponent.find(Button).simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should render the icon', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.ti-alert')).toHaveLength(1);
  });

  it('should render the message', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.warning-msg')).toHaveLength(1);
  });
});
