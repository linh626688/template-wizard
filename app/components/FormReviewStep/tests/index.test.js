// import React from 'react';
// import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

// import FormReviewStep from '../index';

import { mount } from 'enzyme';
import React from 'react';
import FormReviewStep from '../index';
import { PACKAGING_TYPES, SERVICE_TYPES } from '../../../const/Constant';

const location = {
  addressLine: 'Cau Giay',
  postcode: '1000',
  city: 'Hanoi',
  country: 'Vietnam',
};
const service = {
  deliveryType: SERVICE_TYPES.BASIC,
  packagingType: PACKAGING_TYPES.OVER_SIZED,
};

const renderComponent = (props = {}) =>
  mount(<FormReviewStep data={{ location, service }} {...props} />);
const headLabel = (
  <span className="label-header">Review your Details and Submit</span>
);

describe('<FormReviewStep />', () => {
  it('should render the header', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(headLabel)).toEqual(true);
  });

  it('should render the item', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.head-label-item')).toHaveLength(4);
  });
});
