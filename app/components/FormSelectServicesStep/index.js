/**
 *
 * FormSelectServicesStep
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Col, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';

const FormSelectServicesStepWrapper = styled.div`
  .border-row {
    border-bottom: 1px dotted #eeeef4;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class FormSelectServicesStep extends React.Component {
  render() {
    return (
      <FormSelectServicesStepWrapper>
        <Row className="w-100">
          <Col xs="3" />
          <Col xs="6" className="border-row">
            <div className="pb-5">
              <span className="label-header">
                Review your Details and Submit
              </span>
            </div>
            <div>
              <FormGroup>
                <div className="pb-2">
                  <span className="label-item">Delivery Type</span>
                </div>
                <Input invalid type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
                <FormFeedback>This field is required</FormFeedback>
              </FormGroup>
            </div>
            <div>
              <FormGroup>
                <div className="pb-2">
                  <span className="label-item">Packaging Type</span>
                </div>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
                <FormFeedback>This field is required</FormFeedback>
              </FormGroup>
            </div>
          </Col>
          <Col xs="3" />
        </Row>
      </FormSelectServicesStepWrapper>
    );
  }
}

export default FormSelectServicesStep;
