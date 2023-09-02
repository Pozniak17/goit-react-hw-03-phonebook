import { styled } from 'styled-components';

export const FormContainer = styled.form`
  margin-top: ${props => props.theme.spacing(3)}; //15px
  margin-bottom: ${props => props.theme.spacing(3)}; //15px
  padding: 12px;
  border: ${props => props.theme.borders.normal} black;
  box-shadow: ${props => props.theme.shadows.standart};
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  margin-bottom: ${props => props.theme.spacing(3)}; //15px
  width: 200px;
  border: ${props => props.theme.borders.normal} gray;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.middle};
  border: ${props => props.theme.borders.normal} grey;
  cursor: pointer;
  &:hover {
    background-color: navy;
    color: ${props => props.theme.colors.white};
  }
`;
