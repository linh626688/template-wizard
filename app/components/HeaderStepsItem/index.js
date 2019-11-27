/**
 *
 * HeaderStepsItem
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';

const IconHeader = styled.div`
  font-size: 20px;
  border: 3px solid #f3f2ee;
  text-align: center;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.2);
  font-weight: 600;
  width: 70px;
  height: 70px;
  background-color: #ffffff;
  margin: 0 auto;
  position: relative;
  top: -2px;

  [class*='ti-'] {
    position: absolute;
    z-index: 1;
    left: 1px;
    right: 0px;
    top: 23px;
  }
`;

const WizardCard = styled.div`
  max-width: 150px;
  min-height: 150px;
  max-height: 150px;
  cursor: pointer;
  //background: #7AC29A;
  //box-shadow: 0 20px 16px -15px rgba(0, 0, 0, 0.57);
  .middle-vertical {
    margin-top: auto;
    margin-bottom: auto;
  }
  .checked-color {
    color: #007bff;
  }
  .checked-color-border {
    border: 3px solid #007bff;
    color: #007bff;
  }
  .arrow-right {
    font-weight: bold;
    font-size: 25px;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class HeaderStepsItem extends React.Component {
  handleClickItem = e => {
    e.preventDefault();
    console.log('idx', this.props.idx);
  };

  render() {
    const { name, icon, idx, checked } = this.props;
    return (
      <div>
        <WizardCard onClick={this.handleClickItem} className="hover-pointer">
          <Row className={checked ? 'checked-color' : ''}>
            <Col xs="10">
              <IconHeader
                className={`icon-circle ${
                  checked ? 'checked-color-border' : ''
                }`}
              >
                <i className={icon} />
              </IconHeader>
              <div>
                <span className="font-S-20 word-break-all">
                  {idx}.{name}
                </span>
              </div>
            </Col>
            <Col xs="2" className="middle-vertical">
              <div className="arrow-right">
                <i className="ti-angle-right" />
              </div>
            </Col>
          </Row>
        </WizardCard>
      </div>
    );
  }
}

HeaderStepsItem.propTypes = {};

export default HeaderStepsItem;
