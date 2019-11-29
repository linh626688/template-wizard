import React from 'react';
import HeaderSteps from '../app/components/HeaderSteps';
import { action } from '@storybook/addon-actions';
import ModalWarning from '../app/components/ModalWarning';
import { TYPE_WARNING } from '../app/const/Constant';

export default {
  title: 'Modal',
};
export const ModalError = () => (
  <ModalWarning
    isOpen={true}
    type={TYPE_WARNING.ERROR}
    toggle={action('onChange')}
    body="There are some errors in your submission. Please correct them."
  />);
export const ModalSuccess = () => (
  <ModalWarning
    isOpen={true}
    type={TYPE_WARNING.SUCCESS}
    toggle={action('onChange')}
    body="The application has been successfully submitted!"
  />);
