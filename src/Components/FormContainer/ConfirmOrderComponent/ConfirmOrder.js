import React from 'react';
import { useGlobalContext } from '../../context';
import CartSummaryItems from '../cartSummary/CartSummaryItems';

import {
  Container,
  InnerContainer,
  InfoContainer,
  ConfirmOrderTitle,
  Paragraph,
  Button,
  MoreItems,
  GranTotal,
  ProceedBtn,
} from './confirmOrderStyles';

const ConfirmOrder = ({
  method,
  people,
  closeShowConfirmOrder,
  handleOpenSuccessful,
}) => {
  const { cart, amount, total } = useGlobalContext();
  const remainingItems = amount - cart[0].amount;
  return (
    <Container>
      <InnerContainer>
        {people.map((person) => {
          return (
            <InfoContainer key={person.id}>
              <ConfirmOrderTitle>
                <h4>Please Confirm Your Details</h4>
              </ConfirmOrderTitle>
              <Paragraph>
                <span>Name:</span> {person.name}.
              </Paragraph>
              <Paragraph>
                <span>Email:</span> {person.email || `not provided`}.
              </Paragraph>
              <Paragraph>
                <span>Phone Number:</span> {person.phone_number}.
              </Paragraph>
              <Paragraph>
                <span>Address:</span> {person.address}.
              </Paragraph>
              <Paragraph>
                <span>Zip Code:</span> {person.zip_code || `not provided`}.
              </Paragraph>
              <Paragraph>
                <span>City:</span> {person.city}.
              </Paragraph>
              <Paragraph>
                <span>Country:</span> {person.country}.
              </Paragraph>
              <Paragraph>
                <span>Payment Method:</span> {person.method}.
              </Paragraph>
            </InfoContainer>
          );
        })}
        <CartSummaryItems {...cart[0]} />
        <MoreItems>
          And <span>{`(${remainingItems}) more`}</span> item{`(s)`}.
        </MoreItems>
        <GranTotal>
          Grand Total: <span>${total}</span>
        </GranTotal>
        <ProceedBtn type='button' onClick={handleOpenSuccessful}>
          Proceed With Order
        </ProceedBtn>
        <Button type='button' onClick={closeShowConfirmOrder}>
          back to checkout page
        </Button>
      </InnerContainer>
    </Container>
  );
};

export default ConfirmOrder;
