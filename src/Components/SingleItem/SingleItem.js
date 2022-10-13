import SeeProductLinkButton from '../SeeProductLinkButton/SeeProductLinkButton';
import { useGlobalContext } from '../context';
import {
  InnerContainer,
  ImageContainer,
  SeeProductContainer,
  InfoContainer,
} from './singleItemStyles';
const SingleItem = ({ product, index }) => {
  const { windowWidth } = useGlobalContext();

  const checkNum = (num) => {
    if ((num + 1) % 2 === 1) {
      return true;
    }
    return false;
  };

  const { id, slug, name, image, description } = product;
  return (
    <InnerContainer row={checkNum(index)}>
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
        {product.new ? <p>NEW PRODUCT</p> : null}
        <h2>{name}</h2>
        <p className='text'>{description}</p>
        <SeeProductContainer>
          <SeeProductLinkButton id={id} slug={slug} />
        </SeeProductContainer>
      </InfoContainer>
    </InnerContainer>
  );
};

export default SingleItem;
