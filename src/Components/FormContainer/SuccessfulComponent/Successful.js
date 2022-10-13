import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  InnerContainer,
  InfoContainer,
  MarkedContainer,
  Title,
  LinkContainer,
} from './successStyles';

const Successful = ({ handleOpenSuccessful }) => {
  return (
    <Container>
      <InnerContainer>
        <InfoContainer>
          <MarkedContainer></MarkedContainer>
          <Title>Thank You</Title>
          <p>
            Your order was successful and is being processed. A notification
            will be sent to you shortly.
          </p>
          <LinkContainer>
            <Link to='/' onClick={handleOpenSuccessful}>
              Back To Home Page
            </Link>
          </LinkContainer>
        </InfoContainer>
      </InnerContainer>
    </Container>
  );
};

export default Successful;
