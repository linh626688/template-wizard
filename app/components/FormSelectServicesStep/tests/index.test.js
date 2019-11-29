// import React from 'react';
// import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

// import FormSelectServicesStep from '../index';

import { mount } from 'enzyme';
import React from 'react';
import FormSelectServicesStep from '../index';
import { PACKAGING_TYPES, SERVICE_TYPES } from '../../../const/Constant';

const service = {
  deliveryType: SERVICE_TYPES.BASIC,
  packagingType: PACKAGING_TYPES.OVER_SIZED,
};
const renderComponent = (props = {}) =>
  mount(<FormSelectServicesStep serviceData={service} {...props} />);
const headLabel = <span className="label-header">Select your Services</span>;

describe('<FormSelectServicesStep />', () => {
  it('should render the header', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(headLabel)).toEqual(true);
  });

  it('should render the input field deliveryType', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('#deliveryType')).toHaveLength(2);
  });

  it('should render the input field packagingType', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('#packagingType')).toHaveLength(2);
  });
});
