/**
 *
 * ModalWarning
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Row from 'reactstrap/es/Row';

const ModalWarningWrapper = styled.div`
  .warning-color {
    border: 3px solid #dc3545;
    color: #dc3545 !important;
  }
`;
const IconWarning = styled.div`
  font-size: 20px;
  border: 3px solid #dc3545;
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

function ModalWarning(props) {
  return (
    <ModalWarningWrapper>
      <Modal isOpen={props.isOpen} toggle={props.toggle} centered>
        <ModalBody className="text-center pt-3" style={{ color: 'red' }}>
          <IconWarning className="warning-color">
            <i className="ti-check-box" />
          </IconWarning>
          {props.body}
        </ModalBody>
        <div className="text-center p-3">
          <Button color="secondary" onClick={props.toggle}>
            OK
          </Button>
        </div>
      </Modal>
    </ModalWarningWrapper>
  );
}

ModalWarning.propTypes = {};

export default ModalWarning;
