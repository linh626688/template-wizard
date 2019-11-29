import React from 'react';
import { action } from '@storybook/addon-actions';
import CustomButton from '../app/components/CustomButton';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

export default {
  title: 'Button',
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('PrimaryButton',
    () => <CustomButton
      size="md"
      onClick={action('clicked')}
      type="primary"
      name="Submit"
    />);

// export const PrimaryButton  = () => ;
//
// export const SecondaryButton  = () => <CustomButton
//   onClick={action('clicked')}
//   size="md"
//   type="secondary"
//   name="Previous"
// />;
