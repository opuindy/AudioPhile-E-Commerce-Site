import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartSummary from './cartSummary/CartSummary';
import ConfirmOrder from './ConfirmOrderComponent/ConfirmOrder';
import { images } from '../../Utilities/shareTools';
import {
  FormContainer,
  InnerContainer,
  Form,
  FormDetailContainer,
  SummaryContainer,
  GoBack,
  DetailContainer,
  FormControl,
  FormControlContainer,
  RadioContainer,
  LabelContainer,
  Label,
  Transaction,
  MethodSpan,
} from './formStyles';
import Successful from './SuccessfulComponent/Successful';

const FormPage = () => {
  const navigate = useNavigate();
  const [showConfirmOrder, setshowConfirmOrder] = useState(false);
  const [showSuccessful, setShowSuccessful] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [people, setPeople] = useState([]);
  const [method, setMethod] = useState('');
  const [person, setPerson] = useState({
    name: '',
    email: '',
    phone_number: undefined,
    address: '',
    zip_code: '',
    city: '',
    country: '',
    e_money_number: undefined,
    pin: undefined,
    method: '',
  });

  const handleChange = (event) => {
    setMethod(event.target.value);
    setPerson({ ...person, method: event.target.value });
  };

  const handleChange2 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(person));
    if (
      person.name &&
      person.phone_number &&
      person.address &&
      person.city &&
      person.country &&
      person.method
    ) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([newPerson]);
      setshowConfirmOrder(!showConfirmOrder);
      setPerson({
        name: '',
        email: '',
        phone_number: undefined,
        address: '',
        zip_code: '',
        city: '',
        country: '',
      });
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.name) {
      errors.name = '*Name is required';
    }
    if (!values.email) {
      errors.email = '*Email is required';
    } else if (!regex.test(values.email)) {
      errors.email = '*invalid email format';
    }
    if (!values.phone_numbe) {
      errors.phone_number = '*Phone number is required';
    }
    if (!values.address) {
      errors.address = '*Address is required';
    }
    if (!values.city) {
      errors.city = '*City is required';
    }
    if (!values.country) {
      errors.country = '*Country is required';
    }
    if (!values.method) {
      errors.method = '*Payment Method is required';
    }
    if (!values.e_money_number) {
      errors.e_money_number = '*Card number is required';
    }
    if (!values.pin) {
      errors.pin = '*Pin is required';
    } else if (values.pin.length !== 4) {
      errors.pin = '*incorrect pin number';
    }
    return errors;
  };

  const closeShowConfirmOrder = () => {
    setshowConfirmOrder(!showConfirmOrder);
  };

  const handleOpenSuccessful = () => {
    setShowSuccessful(!showSuccessful);
    setshowConfirmOrder(false);
  };

  const back = () => {
    navigate(-1);
  };

  return (
    <FormContainer>
      <InnerContainer>
        <GoBack onClick={back}>Goback</GoBack>
        <Form>
          <FormDetailContainer>
            <div className='heading'>
              <h3>CheckOut</h3>
            </div>
            <DetailContainer className='detail_container'>
              <p className='title'>Billing Details</p>
              <FormControlContainer>
                <FormControl>
                  <label htmlFor='name'>
                    Name <span>{formErrors.name}</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Opuindy Alvin'
                    id='name'
                    name='name'
                    value={person.name}
                    onChange={handleChange2}
                    required
                  />
                </FormControl>
                <FormControl>
                  <label htmlFor='email'>
                    Email<span>{formErrors.email}</span>
                  </label>
                  <input
                    type='email'
                    placeholder='Alvin@sweetmail.com'
                    name='email'
                    id='email'
                    value={person.email}
                    onChange={handleChange2}
                  />
                </FormControl>
                <FormControl>
                  <label htmlFor='phone_number'>
                    Phone Number <span>{formErrors.phone_number}</span>
                  </label>
                  <input
                    type='number'
                    placeholder='+555 4555 8888'
                    name='phone_number'
                    id='phone_number'
                    value={person.phone_number}
                    onChange={handleChange2}
                    required
                  />
                </FormControl>
              </FormControlContainer>
            </DetailContainer>
            <DetailContainer className='detail_container'>
              <p className='title'>Shipping Info </p>
              <FormControl className='full_width'>
                <label htmlFor='address'>
                  Address <span>{formErrors.address}</span>
                </label>
                <input
                  type='text'
                  placeholder='7 Eldorado Boulevard'
                  id='address'
                  name='address'
                  value={person.address}
                  onChange={handleChange2}
                  required
                />
              </FormControl>
              <FormControlContainer>
                <FormControl>
                  <label htmlFor='zip_code'>
                    Zip Code <span>{formErrors.zip_code}</span>
                  </label>
                  <input
                    type='text'
                    placeholder='02222'
                    id='zip_code'
                    name='zip_code'
                    value={person.zip_code}
                    onChange={handleChange2}
                  />
                </FormControl>
                <FormControl>
                  <label htmlFor='city'>
                    City <span>{formErrors.city}</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Berlin'
                    name='city'
                    id='city'
                    value={person.city}
                    onChange={handleChange2}
                    required
                  />
                </FormControl>
                <FormControl>
                  <label htmlFor='country'>
                    Country <span>{formErrors.country}</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Germany'
                    name='country'
                    id='country'
                    value={person.country}
                    onChange={handleChange2}
                    required
                  />
                </FormControl>
              </FormControlContainer>
            </DetailContainer>
            <DetailContainer className='detail_container'>
              <p className='title'>Payment Details</p>
              <RadioContainer>
                <p>Payment Method</p>
                <div>
                  <MethodSpan>{formErrors.method}</MethodSpan>
                  <LabelContainer>
                    <Label htmlFor='e-money'>
                      <input
                        type='radio'
                        id='e-money'
                        name='payment_method'
                        value='e-money'
                        // checked={'value'}
                        onChange={handleChange}
                        required
                      />
                      <span>e-money</span>
                    </Label>
                  </LabelContainer>
                  <LabelContainer>
                    <Label htmlFor='cash-on-delivery'>
                      <input
                        type='radio'
                        name='payment_method'
                        id='cash-on-delivery'
                        value='cash-on-delivery'
                        // checked={'value'}
                        onChange={handleChange}
                        required
                      />
                      <span>Cash on delivery</span>
                    </Label>
                  </LabelContainer>
                </div>
              </RadioContainer>
            </DetailContainer>
            {method === 'e-money' && (
              <DetailContainer className='detail_container'>
                <FormControlContainer>
                  <FormControl>
                    <label htmlFor='e_money_number'>
                      e-Money Number <span>{formErrors.e_money_number}</span>
                    </label>
                    <input
                      type='number'
                      placeholder='12345678911232'
                      name='e_money_number'
                      id='e_money_number'
                      onChange={handleChange2}
                      required
                    />
                  </FormControl>
                  <FormControl>
                    <label htmlFor='pin'>
                      e-Money pin <span>{formErrors.pin}</span>
                    </label>
                    <input
                      type='password'
                      placeholder='****'
                      id='pin'
                      name='pin'
                      onChange={handleChange2}
                      required
                    />
                  </FormControl>
                </FormControlContainer>
              </DetailContainer>
            )}
            {method === 'cash-on-delivery' && (
              <DetailContainer className='detail_container'>
                <Transaction>
                  <img
                    src={images.cash_transaction_icon}
                    alt='cash_transanction_icon'
                  />
                  <p>
                    The 'Cash on Delivery' option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </Transaction>
              </DetailContainer>
            )}
          </FormDetailContainer>
          <SummaryContainer>
            <CartSummary handleSubmit={handleSubmit} />
          </SummaryContainer>
        </Form>
      </InnerContainer>
      {showConfirmOrder && (
        <ConfirmOrder
          people={people}
          method={method}
          closeShowConfirmOrder={closeShowConfirmOrder}
          handleOpenSuccessful={handleOpenSuccessful}
        />
      )}
      {showSuccessful && (
        <Successful handleOpenSuccessful={handleOpenSuccessful} />
      )}
    </FormContainer>
  );
};

export default FormPage;
