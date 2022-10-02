import styled from '@emotion/styled';

export const List = styled.ul`
  width: 550px;
  font-size: 20px;
  padding: 20px;
  text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
  color: white;
  font: 0.8em Georgia, serif;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
  border: 1px solid grey;
  :focus,
  :hover {
      text-shadow: 1px 1px 2px black, 0 0 1em green, 0 0 0.2em black;
  color: white;
  font: 1em Georgia, serif;
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  :focus,
  :hover {
   -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
-moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  }
`;