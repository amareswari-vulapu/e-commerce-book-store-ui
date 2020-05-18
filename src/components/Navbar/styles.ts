//** This file defines the styles for nav bar component */
import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;  
  margin: auto;
  height: 3.5vw;
  background: #e7e8eb;
`;
export const NavHeader = styled.div`
  width: 30%;
  float: left;
  font-size: 1.5vw;
  padding: 0.4vw;
`;
export const NavCart = styled.div`
  float: right;
  margin: 0.4vw;
  cursor: pointer;
  text-align: center;
`;
export const NavSpan = styled.div`
  display: inline-block;
  font-size: 1.2vw;
  padding: 0.4vw;
`;
export const CartSize = styled.span`
  font-size: 1.1vw;
  background: blue;
  border-radius: 50%;
  height: 1.5vw;
  width: 1.5vw;
  line-height: 1.5vw;
  color: #fff;
  display: inline-block;
`;
