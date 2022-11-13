import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
display: flex;
margin-left: auto;
padding-right: 10px;
font-size: 25px;
`;

export const NavLinkDec = styled(NavLink)`
display: flex;
align-items: center;
margin-right: 10px;
color: blue;
	border: 1px solid black;
	border-radius: 20px;
	padding: 5px;
  :hover{

  box-shadow: 0px 0px 20px 4px #144d98;
  
  }

`;
