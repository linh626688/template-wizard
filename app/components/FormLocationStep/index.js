/**
 *
 * FormLocationStep
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';
import TextInputField from '../TextInputField';

export const FormLocationStepWrapper = styled.div`
  .border-row {
    border-bottom: 1px dotted #eeeef4;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class FormLocationStep extends React.Component {
  handleOnChange = (name, value) => {};

  render() {
    return (
      <FormLocationStepWrapper>
        <Row className="w-100">
          <Col xs="3" />
          <Col xs="6" className="border-row">
            <Row className="pb-5">
              <span className="label-header">Setup Your Current Location</span>
            </Row>
            <Row>
              <TextInputField
                label="Address Line"
                placeHolder="Address Line"
                name="addressLine"
                type="text"
                subLabel="Please enter your address"
                isError={false}
              />
            </Row>
            <Row>
              <TextInputField
                label="Postcode"
                placeHolder="postcode"
                name="postcode"
                type="text"
                subLabel="Please enter your postcode"
                isError={false}
              />
            </Row>
            <Row>
              <TextInputField
                label="City"
                placeHolder="city"
                name="city"
                type="text"
                subLabel="Please enter your city"
                isError
              />
            </Row>
            <Row>
              <TextInputField
                label="Country"
                placeHolder="country"
                name="country"
                type="text"
                subLabel="Please enter your Country"
                isError
              />
            </Row>
          </Col>
          <Col xs="3" />
        </Row>
      </FormLocationStepWrapper>
    );
  }
}

FormLocationStep.propTypes = {};

export default FormLocationStep;
