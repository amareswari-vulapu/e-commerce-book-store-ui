//** This file defines the styles for my orders component */
import styled from "styled-components";

export const MyOrdersContainer = styled.div`
    width: 100%;
    height: 200vh;
    margin: auto;
 `;
export const BookContainer = styled.div `
    width: 99.5%;
    margin: 1% auto;
    height: 20%;
    border: 1px solid gray;
`;
export const BookContainerNavBar = styled.div `
    width: 100%;
    height: 18%;
    background-color: #d7a3a37d;
`;
export const OrderPlacedLabel = styled.span `
    font-size: 0.9vw;
    float:left;
    padding:1%;
`;
export const StatusDeliveredLabel = styled.span `
    font-size:0.9vw;
    float:right;
    padding: 1%;
`;
export const BookImageContainer = styled.div`
    width: 10%;
    height: 70%;
    margin: 1%;
    display: inline-block;
    float:left;
`;
export const BookImage = styled.img `
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
`;
export const BookDetailsContainer = styled.div `
    float: left;
    margin:1%;  
    display: inline-block;
`;
export const BookDetails = styled.div `
    font-size:1vw;
`;
export const BookTitle = styled.div `
    font-size: 1.8vw;
`;
export const NoOrder = styled.div `
    font-size: 2.2vw;
    text-align: center;
    color: red;
    padding:5%;
`;