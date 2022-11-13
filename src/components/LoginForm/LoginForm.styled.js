import styled from '@emotion/styled';

export const Form = styled.form`
 display: flex;
  margin-right: auto;
  margin-top: auto;
  font-size: 20px;
  padding: 20px;
  text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
  color: white;
  font: 0.8em Georgia, serif;
`;

export const Label = styled.label`
display: flex;
align-items: center;
margin-right: 10px;
`;

export const Span = styled.span`
margin-right: 10px;
`;

export const Button = styled.button`
margin-right: 15px;
color: white;
background: blue;
	border: 1px solid black;
	border-radius: 20px;
	padding: 10px;
  :hover{

  box-shadow: 0px 0px 20px 4px #144d98;
  
  }
`;