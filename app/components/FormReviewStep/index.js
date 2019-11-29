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
   .head-label-item {
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: .7rem;
      color: #646c9a;
    }
  .label-item {
      font-size: 13px;
      font-weight: 300;
      line-height: 1.8rem;
      color: #646c9a;
    }
`;

/* eslint-disable react/prefer-stateless-function */
class FormReviewStep extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <FormReviewStepWrapper>
        <Row className="w-100">
          <Col xs="3"/>
          <Col xs="6">
            <Row className="pb-5">
              <span className="label-header">Review your Details and Submit</span>
            </Row>

            <Row className="head-label-item pt-3">Current Address</Row>
            <Row className="label-item">{data.location.addressLine}</Row>
            <Row className="label-item">{data.location.postcode}</Row>
            <Row className="label-item">{data.location.city}</Row>
            <Row className="label-item">{data.location.country}</Row>
            <Row className="border-row pb-3"/>

            <Row className="head-label-item pt-3">Delivery Service Type</Row>
            <Row className="label-item">{data.service.deliveryType}</Row>
            <Row className="label-item">{data.service.packagingType}</Row>
            <Row className="border-row pb-3"/>
          </Col>
          <Col xs="3"/>
        </Row>
      </FormReviewStepWrapper>
    );
  }
}

FormReviewStep.propTypes = {};

export default FormReviewStep;
