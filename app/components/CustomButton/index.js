/**
 *
 * CustomButton
 *
 */

import React from 'react';
import { Button } from 'reactstrap';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CustomButton(props) {
  return (
    <Button size={props.size} onClick={props.onClick} color={props.type}>
      <span>{props.name}</span>
    </Button>
  );
}

CustomButton.propTypes = {};

export default CustomButton;
