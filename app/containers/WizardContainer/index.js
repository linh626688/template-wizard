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
import { Col, Row } from 'reactstrap';
import makeSelectWizardContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  BodySteps,
  BottomSteps,
  CenteredSection,
  WizardWrapper,
} from './style';
import HeaderSteps from '../../components/HeaderSteps';
import FormLocationStep from '../../components/FormLocationStep';
import CustomButton from '../../components/CustomButton';
import FormSelectServicesStep from '../../components/FormSelectServicesStep';
import FormReviewStep from '../../components/FormReviewStep';
import ModalWarning from '../../components/ModalWarning';

/* eslint-disable react/prefer-stateless-function */
export class WizardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  handleClickNext = e => {
    e.preventDefault();
    console.log(e.target);
  };

  handleModal = e => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Helmet>
          <title>WizardContainer</title>
          <meta name="description" content="Description of WizardContainer" />
        </Helmet>
        <WizardWrapper>
          <CenteredSection>
            <HeaderSteps />
            <BodySteps>
              <FormLocationStep />
              {/* <FormSelectServicesStep/> */}
              {/* <FormReviewStep/> */}
            </BodySteps>
            <BottomSteps>
              <Row className="w-100">
                <Col xs="3" />
                <Col xs="6">
                  <Row>
                    <Col style={{ textAlign: 'left' }}>
                      <CustomButton
                        onClick={this.handleClickNext}
                        size="md"
                        type="secondary"
                        name="Previous"
                      />
                    </Col>
                    <Col style={{ textAlign: 'right' }}>
                      <CustomButton
                        size="md"
                        onClick={this.handleModal}
                        type="primary"
                        name="Next"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col xs="3" />
              </Row>
            </BottomSteps>
            <ModalWarning
              isOpen={isOpen}
              toggle={this.handleModal}
              body="There are some errors in your submission. Please correct them."
            />
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
