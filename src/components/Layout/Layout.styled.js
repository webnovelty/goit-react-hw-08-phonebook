import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const AppWrapper = styled.div`
width: 1000px;
margin-left: auto;
margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 28px;
  gap: 15px;
  padding-top: 18px;
  color: #010101;
  border: 1px solid rgba(33, 33, 33, 0.2);
  
`;

export const Title = styled.h1`
text-shadow: #FC0 1px 0 10px;
  color: #0000CD;
`;

export const TitleContacts = styled.h2`
text-shadow: #FC0 1px 0 10px;
  margin-top: 15px;
  color: #0000CD;
`;




export const Container = styled.div`
  max-width: 850px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: orangered;
  }
`;