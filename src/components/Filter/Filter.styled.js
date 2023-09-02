import { styled } from 'styled-components';

export const FilterLabel = styled.label`
  margin-top: ${props => props.theme.spacing(4)}; //20px

  display: flex;
  flex-direction: column;
`;

export const FilterInput = styled.input`
  width: 150px;
  margin-top: ${props => props.theme.spacing(1)}; //5px
  margin-bottom: ${props => props.theme.spacing(3)}; //15px
`;
