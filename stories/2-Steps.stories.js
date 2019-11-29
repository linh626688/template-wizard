import React from 'react';
import { action } from '@storybook/addon-actions';
import HeaderStepsItem from '../app/components/HeaderStepsItem';
import HeaderSteps from '../app/components/HeaderSteps';
import FormLocationStep from '../app/components/FormLocationStep';
import TextInputField from '../app/components/TextInputField';

import FormSelectServicesStep from '../app/components/FormSelectServicesStep';
import FormReviewStep from '../app/components/FormReviewStep';
import { PACKAGING_TYPES, SERVICE_TYPES } from '../app/const/Constant';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';


export default {
  title: 'Steps',
  decorators: [withKnobs],

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
  <div className="p-3">
    <HeaderStepsItem
      name="Location"
      icon="ti-map-alt"
      stepIdx={0}
      onClickStep={action('clicked')}
      currentStep={1}/>
  </div>;

export const Header = () => (
  <div className="p-3">
    <HeaderSteps currentStep={1} handleChangeStep={action('clicked')}/>
  </div>
);

export const InputValid = () => {
  const value = text('City', 'Ha Noi');
  return (
    <TextInputField
      label="City"
      placeHolder="city"
      name="city"
      type="text"
      subLabel="Please enter your city"
      isError={false}
      value={value}
      onChange={action('onChange')}
    />);
};

export const InputInvalid = () => {
  const value = text('City', 'Ha Noi');
  return (
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
};

export const FormLocation = () => {
  const addressLine = text('Address Line', 'Cau Giay');
  const postcode = text('postcode', '1000');
  const city = text('city', 'Hanoi');
  const country = text('country', 'Vietnam');
  const data = {
    addressLine, postcode, city, country,
  };
  return (
    <FormLocationStep locationData={data} handleChange={action('clicked')}/>
  );
};

export const FormSelectServices = () => (
  <FormSelectServicesStep serviceData={service} handleChange={action('clicked')}/>
);

export const FormReview = () => {
  const addressLine = text('Address Line', 'Cau Giay');
  const postcode = text('postcode', '1000');
  const city = text('city', 'Hanoi');
  const country = text('country', 'Vietnam');
  const deliveryType = text('deliveryType', SERVICE_TYPES.BASIC);
  const packagingType = text('packagingType', PACKAGING_TYPES.OVER_SIZED);

  const location = {
    addressLine,
    postcode,
    city,
    country,
  };
  const service = {
    deliveryType,
    packagingType,
  };
  return (

    <FormReviewStep data={{ location, service }} handleChange={action('clicked')}/>
  );
};


