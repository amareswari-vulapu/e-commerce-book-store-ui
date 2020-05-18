//** This file defines the styles for selected item component */
import styled from "styled-components";

export const  ProductContainer = styled.div`
  width: 99.5%;  
  margin: auto;
  border: 0.1vw solid gray;
  height: 80vh;
`;
export const  ProductFigure = styled.figure`
  width: 15%;
  height: auto;
  margin: 2%;
  float: left;
`;
export const  ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;
export const  ProductDetails = styled.div`
  margin:1%;
  padding:0;
  width:50vw;
  height:auto;
  float:left;
`;
export const  ProductHeader = styled.p`
  font-size: 1.5vw;
  padding: 1%;
  margin:0;
`;
export const  ProductOtherDetails = styled.span`
  font-size: 1.2vw;
  display:block;
  padding: 3px;
  margin-left:1%;
`;
export const  ProductDescriptionDiv = styled.div`
  width:50%;
  height:40%;
  background-color:#e7e8eb;
  font-size: 1vw;
  margin-top: 7%;
  margin-left: 2%;
  padding: 1.5%;
  text-align: left;
`;
export const  ActionButton = styled.button`
  background-color: #c68e8e;
  border-radius: 0.5vw;
  font-size: 1vw;
  float: left;
  margin: 1%;
  padding: 0.6vw;
  color: #ffffff;
  border: 0;
`;
