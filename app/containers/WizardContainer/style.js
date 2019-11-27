import styled from 'styled-components';

export const Section = styled.section`
  margin: 3em auto;

  &:first-child {
    margin-top: 0;
  }
`;

export const CenteredSection = styled(Section)`
  text-align: center;
  background: #ffffff;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 20px 16px -15px rgba(0, 0, 0, 0.57);
`;

export const WizardWrapper = styled.div`
  padding-top: 50px;
`;

export const BodySteps = styled.div`
  padding-top: 50px;
  padding-bottom: 20px;
  text-align: left !important;
  //height: 60vh;
`;

export const BottomSteps = styled.div`
  padding-top: 20px;
`;
