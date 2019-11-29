// import React from 'react';
// import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

// import TextInputField from '../index';
import { mount } from 'enzyme';
import React from 'react';
import { isEmpty } from 'lodash';
import { FormGroup, FormText } from 'reactstrap';
import TextInputField from '../index';
import CustomButton from '../../CustomButton';

const renderComponent = (props = {}) =>
  mount(
    <TextInputField
      label="Address Line"
      placeHolder="Address Line"
      name="addressLine"
      type="text"
      subLabel="Please enter your address"
      {...props}
    />,
  );
const label = <span className="label-item">Address Line</span>;
const subLabel = (
  <FormText className="err-label-item">Please enter your address</FormText>
);

describe('<TextInputField />', () => {
  it('should render label of input field', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(label)).toEqual(true);
  });
  it('should render sub-label of input field', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(subLabel)).toEqual(true);
  });

  it('should render input field', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('name')).toEqual('addressLine');
  });
});
