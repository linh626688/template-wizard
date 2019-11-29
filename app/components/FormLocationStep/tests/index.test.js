import { mount } from 'enzyme';
import React from 'react';
import FormLocationStep from '../index';

const location = {
  addressLine: 'Cau Giay',
  postcode: '1000',
  city: 'Hanoi',
  country: 'Vietnam',
};

const renderComponent = (props = {}) =>
  mount(
    <FormLocationStep
      locationData={location}
      {...props}/>,
  );
const children = <span className="label-header">
                Setup Your Current Location</span>;


describe('<FormLocationStep />', () => {
  it('should render the header', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should render the input field', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.label-item')).toHaveLength(4);
  });

});
