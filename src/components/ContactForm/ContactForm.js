import styled from 'styled-components';

export const Form = styled.form`
  border-radius: 5px;
  background-color: #d1c6d7;
  margin: auto;
  border: 1px solid black;
  width: 400px;
  padding: 10px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 20px;
  /* padding: 10px; */
`;

export const FormInput = styled.input`
  width: 45%;
  height: 20px;
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const FormButton = styled.button`
  font-weight: 700;
  /* background-color: navy; */
  /* color: white; */
  padding: 10px;
  border-radius: 8px;
  border: 1px solid black;
  cursor: pointer;

  :hover {
    background-color: navy;
    color: white;
  }
`;
