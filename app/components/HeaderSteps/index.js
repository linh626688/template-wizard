/**
 *
 * HeaderSteps
 *
 */

import React from 'react';
import HeaderStepsItem from '../HeaderStepsItem';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

const HeaderStepsWrapper = styled.div`
  border-bottom: 1px solid #eeeef4;
`;

/* eslint-disable react/prefer-stateless-function */
class HeaderSteps extends React.Component {
  render() {
    return (
      <HeaderStepsWrapper>
        <Row>
          <Col xs={4}>
            <HeaderStepsItem name="Location" icon="ti-map-alt" idx={1} checked={true}/>
          </Col>
          <Col xs={4}>
            <HeaderStepsItem name="Select Service" icon="ti-package" idx={2} checked={true}/>
          </Col>
          <Col xs={4}>
            <HeaderStepsItem name="Review" icon="ti-check-box" idx={3} checked={false}/>
          </Col>
        </Row>
        {/*<HeaderStepsItem name="type" icon="2" idx={2}/>*/}
        {/*<HeaderStepsItem name="facilities" icon="3" idx={3}/>*/}
      </HeaderStepsWrapper>
    );
  }
}

HeaderSteps.propTypes = {};

export default HeaderSteps;
