import React from 'react';
import { Spinner } from 'reactstrap';
import { LoadingSpinner } from '../app/containers/WizardContainer/style';

export default {
  title: 'Common',
};

export const Loading = () => (
  <LoadingSpinner>
    <Spinner style={{ width: '3rem', height: '3rem' }}/>
  </LoadingSpinner>
);
