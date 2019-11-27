/**
 *
 * FormReviewStep
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';
import { FormLocationStepWrapper } from '../FormLocationStep';

const FormReviewStepWrapper = styled.div`
  .border-row {
    border-bottom: 1px dotted #eeeef4;
  }
`;

const LabelItem = styled.div``;

/* eslint-disable react/prefer-stateless-function */
class FormReviewStep extends React.Component {
  render() {
    return (
      <FormReviewStepWrapper>
        <Row className="w-100">
          <Col xs="3" />
          <Col xs="6" className="">
            <div className="pb-5">
              <span className="label-header">Select your Services</span>
            </div>
            <div className="border-row pb-3">
              <div className="head-label-item pt-3">Current Address</div>
              <div className="label-item">Address Line 1</div>
              <div className="label-item">Address Line 1</div>
            </div>
            <div className="border-row pb-3">
              <div className="head-label-item pt-3">Current Address</div>
              <div className="label-item">Address Line 1</div>
              <div className="label-item">Address Line 1</div>
            </div>
            <div className="border-row pb-3">
              <div className="head-label-item pt-3">Current Address</div>
              <div className="label-item">Address Line 1</div>
              <div className="label-item">Address Line 1</div>
            </div>
          </Col>
          <Col xs="3" />
        </Row>
      </FormReviewStepWrapper>
    );
  }
}

FormReviewStep.propTypes = {};

export default FormReviewStep;
