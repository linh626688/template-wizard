/**
 *
 * WizardContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectWizardContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import { BodySteps, BottomSteps, CenteredSection, WizardWrapper } from './style';
import HeaderSteps from '../../components/HeaderSteps';
import FormLocationStep from '../../components/FormLocationStep';
import { Col, Row } from 'reactstrap';

/* eslint-disable react/prefer-stateless-function */
export class WizardContainer extends React.Component {

  handleClickNext = e => {
    e.preventDefault();

  };

  render() {
    return (
      <div>
        <Helmet>
          <title>WizardContainer</title>
          <meta name="description" content="Description of WizardContainer"/>
        </Helmet>
        <WizardWrapper>
          <CenteredSection>
            <HeaderSteps/>
            <BodySteps>
              <FormLocationStep/>
            </BodySteps>
            <BottomSteps>
              <Row>
                <Col xs={{size: 2,  offset: 2}}>
                  <button onClick={this.handleClickNext}>previous</button>
                </Col>
                <Col xs={{size: 2,  offset: 4}}>
                <button onClick={this.handleClickNext}>next</button>
              </Col>
              </Row>
            </BottomSteps>
          </CenteredSection>
        </WizardWrapper>
      </div>
    );
  }
}

WizardContainer.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  wizardContainer: makeSelectWizardContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'wizardContainer', reducer });
const withSaga = injectSaga({ key: 'wizardContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(WizardContainer);
