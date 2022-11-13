import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
display: flex;
margin-left: auto;
padding-left: 10px;
text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
  color: white;
  font: 0.8em Georgia, serif;
  margin-right: 10px;

`;

export const NavLinkMenu = styled(NavLink)`
margin-right: 15px;
color: white;
	border: 1px solid black;
	border-radius: 20px;
	padding: 10px;
  :hover{

  box-shadow: 0px 0px 20px 4px #144d98;
  
  }

`;