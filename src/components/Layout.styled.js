import { styled } from 'styled-components';

export const Layout = styled.div`
  width: ${props => props.theme.sizes[2]}px; //400
  padding-left: ${props => props.theme.spacing(3)}; //15px
  padding-right: ${props => props.theme.spacing(3)}; //15px
  margin: 50px auto;
`;
