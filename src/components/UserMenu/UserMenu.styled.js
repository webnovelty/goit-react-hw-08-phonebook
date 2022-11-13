import styled from '@emotion/styled';

export const Div = styled.div`
display: flex;
margin-left: auto;
align-items: center;
`;

export const Button = styled.button`
margin-right: 10px;
position: relative;
  display: inline-block;
  font-size: 15px;
  color: #777674;
  font-weight: bold;
  text-decoration: none;
  text-shadow: rgba(255,255,255,.5) 1px 1px, rgba(100,100,100,.3) 3px 7px 3px;
  user-select: none;
  padding: 1em 2em;
  outline: none;
  border-radius: 3px / 100%;
  background-image:
   linear-gradient(45deg, rgba(255,255,255,.0) 30%, rgba(255,255,255,.8), rgba(255,255,255,.0) 70%),
   linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0) 20%, rgba(255,255,255,0) 90%, rgba(255,255,255,.3)),
   linear-gradient(to right, rgba(125,125,125,1), rgba(255,255,255,.9) 45%, rgba(125,125,125,.5)),
   linear-gradient(to right, rgba(125,125,125,1), rgba(255,255,255,.9) 45%, rgba(125,125,125,.5)),
   linear-gradient(to right, rgba(223,190,170,1), rgba(255,255,255,.9) 45%, rgba(223,190,170,.5)),
   linear-gradient(to right, rgba(223,190,170,1), rgba(255,255,255,.9) 45%, rgba(223,190,170,.5));
  background-repeat: no-repeat;
  background-size: 200% 100%, auto, 100% 2px, 100% 2px, 100% 1px, 100% 1px;
  background-position: 200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);
  box-shadow: rgba(0,0,0,.5) 3px 10px 10px -10px;
  :hover {
  transition: .5s linear;
  background-position: -200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);
}
:active {
  top: 1px;
}
`;

export const Title = styled.p`
text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
  color: white;
  font: 0.8em Georgia, serif;
  margin-right: 10px;
`;

export const Span = styled.span`
text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
  color: red;
  font: 1.2em Georgia, serif;
  margin-right: 10px;
`;