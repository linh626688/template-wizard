import React from 'react';
import { action } from '@storybook/addon-actions';
import HeaderStepsItem from '../app/components/HeaderStepsItem';
import HeaderSteps from '../app/components/HeaderSteps';
import FormLocationStep from '../app/components/FormLocationStep';
import TextInputField from '../app/components/TextInputField';

import FormSelectServicesStep from '../app/components/FormSelectServicesStep';
import FormReviewStep from '../app/components/FormReviewStep';
import { PACKAGING_TYPES, SERVICE_TYPES } from '../app/const/Constant';


export default {
  title: 'Steps',
};

const location = {
  addressLine: 'Cau Giay',
  postcode: '1000',
  city: 'Hanoi',
  country: 'Vietnam',
};
const service = {
  deliveryType: SERVICE_TYPES.BASIC,
  packagingType: PACKAGING_TYPES.OVER_SIZED,
};

export const HeaderItem = () =>
  <HeaderStepsItem
    name="Location"
    icon="ti-map-alt"
    stepIdx={0}
    onClickStep={action('clicked')}
    currentStep={1}/>;

export const Header = () => (
  <HeaderSteps currentStep={1} handleChangeStep={action('clicked')}/>
);

export const InputValid = () => (
  <TextInputField
    label="City"
    placeHolder="city"
    name="city"
    type="text"
    subLabel="Please enter your city"
    isError={false}
    value="Hanoi"
    onChange={action('onChange')}
  />);

export const InputInvalid = () => (
  <TextInputField
    label="City"
    placeHolder="city"
    name="city"
    type="text"
    subLabel="Please enter your city"
    isError={true}
    value="Hanoi"
    onChange={action('onChange')}
  />);


export const FormLocation = () => (
  <FormLocationStep locationData={location} handleChange={action('clicked')}/>
);

export const FormSelectServices = () => (
  <FormSelectServicesStep serviceData={service} handleChange={action('clicked')}/>
);

export const FormReview = () => (
  <FormReviewStep data={{ location, service }} handleChange={action('clicked')}/>
);


