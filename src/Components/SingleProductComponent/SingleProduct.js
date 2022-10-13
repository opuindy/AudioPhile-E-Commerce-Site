import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Others from './Others/Others';
import { useGlobalContext } from '../context';
import Amount from '../AmountContainer/Amount';
import {
  SingleProductContainer,
  InnerContainer,
  ImageContainer,
  InfoContainer,
  SeeProductContainer,
  DescriptionInfoContainer,
  Box,
  GoBack,
  ItemImageContainer,
  FirstContainer,
  SecondContainer,
  ImageContainer1,
  ImageContainer2,
} from './singleProductStyles';
const SingleProduct = () => {
  const [index, setIndex] = useState(1);
  const { windowWidth, singleProduct, data, addToCart, itemAmount, cart } =
    useGlobalContext();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const increment = () => {
    setIndex(index + 1);
  };

  const decrement = () => {
    let num = (num) => {
      if (num <= 0) {
        return 1;
      }
      return num;
    };
    setIndex(num(index - 1));
  };

  const { productId } = useParams();
  let product = data.find((product) => product.slug === productId);
  product.amount = index;

  const {
    id,
    slug,
    name,
    image,
    price,
    description,
    features,
    includes,
    gallery,
    others,
    amount,
  } = product;
  const dec = `dec`;
  const inc = `inc`;
  return (
    <SingleProductContainer>
      <InnerContainer>
        <GoBack onClick={goBack}>GoBack</GoBack>
        <ImageContainer>
          <div>
            <img
              src={
                (windowWidth <= 768 && image.mobile) ||
                (windowWidth <= 1203 && image.tablet) ||
                (windowWidth >= 1204 && image.desktop)
              }
              alt={slug}
            />
          </div>
        </ImageContainer>
        <InfoContainer>
          {product.new && <p>NEW PRODUCT</p>}

          <h2>{name}</h2>
          <p className='text'>{description}</p>
          <p className='price'>$ {price}</p>
          <SeeProductContainer>
            <div className='amt_container'>
              <Amount
                amount={amount}
                id={id}
                inc={inc}
                dec={dec}
                increment={increment}
                decrement={decrement}
              />
            </div>
            <button
              type='button'
              className='button'
              onClick={() => addToCart(id, amount)}
            >
              ADD TO CART
            </button>
          </SeeProductContainer>
        </InfoContainer>
      </InnerContainer>
      <DescriptionInfoContainer>
        <div className='features_container'>
          <h3>FEATURE</h3>
          <p>{features}</p>
        </div>

        <Box>
          <h3>IN THE BOX</h3>
          <div className='quantity_container'>
            {includes.map((include, index) => {
              const { quantity, item } = include;
              return (
                <div key={index}>
                  <p className='text'>{quantity}x</p>
                  <p className='text2'>{item}</p>
                </div>
              );
            })}
          </div>
        </Box>
      </DescriptionInfoContainer>
      <ItemImageContainer>
        <FirstContainer>
          <ImageContainer1>
            <div>
              <img
                src={
                  (windowWidth <= 768 && gallery.first.mobile) ||
                  (windowWidth <= 1203 && gallery.first.tablet) ||
                  (windowWidth >= 1204 && gallery.first.desktop)
                }
                alt={slug}
              />
            </div>
          </ImageContainer1>
          <ImageContainer2>
            <div>
              <img
                src={
                  (windowWidth <= 768 && gallery.second.mobile) ||
                  (windowWidth <= 1203 && gallery.second.tablet) ||
                  (windowWidth >= 1204 && gallery.second.desktop)
                }
                alt={slug}
              />
            </div>
          </ImageContainer2>
        </FirstContainer>
        <SecondContainer>
          <div>
            <img
              src={
                (windowWidth <= 768 && gallery.third.mobile) ||
                (windowWidth <= 1203 && gallery.third.tablet) ||
                (windowWidth >= 1204 && gallery.third.desktop)
              }
              alt={slug}
            />
          </div>
        </SecondContainer>
      </ItemImageContainer>
      <Others others={others} />
    </SingleProductContainer>
  );
};

export default SingleProduct;
