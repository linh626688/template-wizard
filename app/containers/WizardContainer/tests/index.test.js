import { shallow } from 'enzyme';
import React from 'react';
import { WizardContainer } from '../index';
import HeaderSteps from '../../../components/HeaderSteps';
import { BodySteps } from '../style';

describe('<WizardContainer />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<WizardContainer />);
    expect(renderedComponent.contains(<title>WizardContainer</title>)).toBe(
      true,
    );
  });
  it('should render steps', () => {
    const renderedComponent = shallow(<WizardContainer />);
    expect(renderedComponent.find(HeaderSteps)).toHaveLength(1);
  });
  it('should render the body form', () => {
    const renderedComponent = shallow(<WizardContainer />);
    expect(renderedComponent.find(BodySteps)).toHaveLength(1);
  });
});
