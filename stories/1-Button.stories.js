import React from 'react';
import { action } from '@storybook/addon-actions';
import CustomButton from '../app/components/CustomButton';
import { withKnobs } from '@storybook/addon-knobs/react';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const PrimaryButton = () => <CustomButton
  size="md"
  onClick={action('clicked')}
  type="primary"
  name="Submit"
/>;

export const SecondaryButton = () => <CustomButton
  onClick={action('clicked')}
  size="md"
  type="secondary"
  name="Previous"
/>;
