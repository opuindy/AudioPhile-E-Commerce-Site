import styled from 'styled-components';

const orange = '#D87D4A';
const white = '#FFFFFF';
const gray = '#F1F1F1';
const mainTransition = `all 0.3s linear`;
/* font-weights:  */
const regular = `400`;
const bold = `700`;

export const FormContainer = styled.section`
  width: 100%;
  height: max-content;
  background: ${gray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GoBack = styled.p`
  font-weight: ${regular};
  color: black;
  text-decoration: dotted;
  position: absolute;
  top: -2.5em;
  left: 2em;
  transition: ${mainTransition};

  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    left: 3em;
  }
  @media screen and (min-width: 1204px) {
    left: 0;
    top: -3.5em;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  height: max-content;
  margin: 4em 0;
  padding: 0 2em;
  background: ${gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: ${mainTransition};
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    padding: 0 3em;
  }
  @media screen and (min-width: 1204px) {
    padding: 0;
    margin-top: 6em;
  }
`;

export const Form = styled.form`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: ${mainTransition};

  @media screen and (min-width: 1204px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const FormDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${white};
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  transition: ${mainTransition};
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    margin-top: 0;
    margin-bottom: auto;
  }
  @media screen and (min-width: 1204px) {
    width: 70%;
    margin-right: auto;
    margin-bottom: auto;
  }

  .heading {
    width: 100%;
    height: 3rem;
    margin-bottom: 1.5em;
    padding-top: 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px solid silver;
    border-right: 1px solid silver;
    border-width: 4px;

    h3 {
      text-transform: uppercase;
      font-weight: ${bold};
      font-size: 1.5rem;
      margin-right: auto;
      font-weight: 600;
      letter-spacing: 0.05em;
    }
  }
`;

export const SummaryContainer = styled.div`
  width: 100%;
  max-width: 450px;
  height: max-content;
  background: ${white};
  margin-top: 2em;
  padding: 2em;
  border-radius: 10px;
  transition: ${mainTransition};
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    margin-right: auto;
  }
  @media screen and (min-width: 1204px) {
    margin-top: 0;
    margin-bottom: auto;
    max-width: 350px;
  }
`;

export const DetailContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1em 0;

  .title {
    font-weight: ${bold};
    font-size: 1rem;
    color: ${orange};
    text-transform: uppercase;
  }

  .full_width {
    @media screen and (min-width: 768px) {
      width: 100%;
    }
  }
`;

export const FormControl = styled.div`
  width: 100%;
  min-height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0;
  transition: ${mainTransition};

  label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: auto;
    margin-bottom: 0.5em;
    font-size: 0.9rem;
    font-weight: ${bold};
    transition: ${mainTransition};

    span {
      margin-left: auto;
      color: red;
      text-transform: capitalize;
    }
  }

  input {
    width: 100%;
    height: 2.5rem;
    padding: 1em 2em;
    font-size: 0.9rem;
    font-weight: ${bold};
    letter-spacing: 0.05em;
    outline: none;
    border: 2px solid silver;
    border-top: none;
    border-left: none;
    border-bottom-width: 4px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  input:focus {
    border: 3px solid ${orange};
    border-radius: 10px;
  }

  input::placeholder {
    font-weight: ${bold};
    text-transform: capitalize;
  }

  @media screen and (min-width: 768px) {
    width: 49%;
  }
`;

export const FormControlContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
  }
`;

export const RadioContainer = styled.div`
  margin: 1.5em 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  transition: ${mainTransition};

  p {
    font-weight: ${bold};
    text-transform: capitalize;
    margin-right: auto;
    margin-bottom: 1.5em;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const LabelContainer = styled.div`
  width: 400px;
  height: 2.5rem;
  border: 2px solid silver;
  border-top: none;
  border-left: none;
  border-bottom-width: 4px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1em;
  transition: ${mainTransition};
  &:hover {
    border: none;
  }
  @media screen and (max-width: 430px) {
    width: 280px;
  }
  @media screen and (max-width: 410px) {
    width: 255px;
  }
  @media screen and (max-width: 361px) {
    width: 240px;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: ${bold};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 0 1.5em;
  &:hover {
    border: 3px solid ${orange};
  }

  span {
    margin-left: 0.5em;
  }

  input[type='radio'] {
    width: 1rem;
    height: 1rem;
    background: none;
    outline: none;
  }

  input[type='radio']:focus {
    background: ${orange};
  }
`;

export const Transaction = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    display: block;
    margin-bottom: 1em;
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 1em;
    }
  }

  p {
    width: 80%;
    text-align: left;
    font-weight: 550;
    @media screen and (min-width: 768px) {
      width: 85%;
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MethodSpan = styled.span`
  color: red;
  text-transform: capitalize;
`;
