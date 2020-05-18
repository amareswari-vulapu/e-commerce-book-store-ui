//** This file defines the styles for product item component */
import styled from "styled-components";

export const ProductContainer = styled.div`
  background-color: #b1aaaae8;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin:1%;
  width:18%;
  height:45vh;
  float:left;
`;
export const ProductFigure = styled.figure`
  width: 100%;
  height: 75%;
  margin:0;
  background-color: #c68e8e;
`;
export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;
export const ProductDetails = styled.div`
  cursor: pointer;
  margin:0;
  padding:0;
  width:100%;
  height:85%;
`;
export const ProductHeader = styled.h5`
  text-align: center;
  font-size: 1.3vw;
  margin:0;
  text-decoration:none;
`;
export const ProductDescriptionDiv = styled.div`
  margin: 3%;
  font-size: 0.7vw;
  max-width: 100%;
  overflow: hidden;
  height: 4vh;
  text-overflow: ellipsis;
  text-decoration:none;
`;
// export const StyledLink = styled.link`
//     text-decoration: none;

//     &:focus, &:hover, &:visited, &:link, &:active {
//         text-decoration: none;
//     }
// `;
export const ActionButton = styled.button`
    background-color: #c68e8e;
    border-radius: 0.5vw;
    font-size: 1vw;
    float: left;
    margin-left: 7%;
    padding: 0.6vw;
    color: #ffffff;
    border: 0;
`;
