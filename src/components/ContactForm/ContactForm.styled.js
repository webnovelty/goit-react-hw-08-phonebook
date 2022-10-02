import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding-top: 10px;
  color: #2F4F4F;
  font-weight: 500;
  
`;

export const Label = styled.label`

  display: flex;
  font-size: 20px;
  font-weight: bold;
  margin-right: 5px;
    text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
  color: white;
  font: 1.5em Georgia, serif;
`;

export const Input = styled.input`
  margin-right: 10px;
  padding-left: 5px;
  font-size: 30px;
  width: 300px;
  height: 60px;
  background-color: #e7e7e9;
  border: 1px solid rgba(33, 33, 33, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
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