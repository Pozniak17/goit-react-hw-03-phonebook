import { styled } from 'styled-components';

export const ContactItem = styled.li`
  margin-bottom: ${props => props.theme.spacing(2)}; //10px
  border: ${props => props.theme.borders.normal} white;
  padding: ${props => props.theme.spacing(1)}; //5px
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: ${props => props.theme.sizes[1]}px; //300px
  border-radius: ${props => props.theme.radii.middle}; //8px
  box-shadow: ${props => props.theme.shadows.standart};
`;

export const Button = styled.button`
  margin-left: ${props => props.theme.spacing(2)}; //10px
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.middle}; //8px
  border: ${props => props.theme.borders.normal} grey;
  cursor: pointer;
  &:hover {
    background-color: navy;
    color: ${props => props.theme.colors.white};
  }
`;
