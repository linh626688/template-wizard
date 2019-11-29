import { mount } from 'enzyme';
import React from 'react';
import HeaderSteps from '../index';
import { WizardCard } from '../../HeaderStepsItem';

const renderComponent = (props = {}) =>
  mount(<HeaderSteps currentStep={1} {...props} />);

describe('<HeaderSteps />', () => {
  it('should render the icon', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(WizardCard)).toHaveLength(3);
  });
});
