/**
 *
 * FormLocationStep
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';

export const FormLocationStepWrapper = styled.div`
  .border-row {
    border-bottom: 1px dotted #eeeef4;
  }
  .label-header {
    text-align: start;
    font-size: 20px;
    font-weight: bold;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class FormLocationStep extends React.Component {
  render() {
    return (
      <FormLocationStepWrapper>
        <Row>
          <Col xs="3"/>
          <Col xs="6" className="border-row">
              <span className="label-header">
                Setup Your Current Location
              </span>
          </Col>
          <Col xs="3"/>
        </Row>
      </FormLocationStepWrapper>
    );
  }
}

FormLocationStep.propTypes = {};

export default FormLocationStep;
