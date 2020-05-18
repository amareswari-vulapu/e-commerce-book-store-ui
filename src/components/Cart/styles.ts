//** This file defines the styles for cart component */
import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;  
  margin: auto;
`;
export const Header = styled.div`
  font-size: 1.8vw;
  margin-top: 4%;
  margin-bottom:2%;
`;
export const CartTotalPrice = styled.div `

`;
export const CartAddressDiv = styled.div`
  width:40%;
  float:left;
  margin:2%
`;
export const AddressForm = styled.p `
  font-size: 1.2vw;
  margin:0;
`;
export const CartListsDiv = styled.div`
  height: 100%;
  width: 48%;
  float:left;
  margin:2%
`;
export const CartListItemDiv = styled.div`
  width:50%;
`;
export const ProductDetails = styled.div`
  width: 90%;
  min-height: 23vh;
  padding: 1%;
  margin: 0;
  background-color: #d7a3a37d;
`;
export const Addressbutton = styled.button`
  background-color: #cac9c97d;
  border-radius: 0.5vw;
  font-size: 1.05vw;
  float: left;
  margin: 2%;
  padding: 0.8vw;
  color: #000;
  border: 0;
`;
export const ItemName = styled.div`
  width:15vw;
  display:inline-block;
  font-size: 1vw;
`;
export const TotalName = styled.div`
  width:15vw;
  display:inline-block;
  font-size: 1vw;
`;
export const TotalPrice = styled.div`
  padding:1%;
  width:5vw;
  font-size: 1vw;
  margin-top:1%;
  display:inline-block;
`;
export const ItemPrice = styled.div`
  padding:1%;
  width:5vw;
  font-size: 1vw;
  margin-top:1%;
  display:inline-block;
`;
export const PaymentButton = styled.button`
  background-color: #d7a3a37d;
  border-radius: 0.5vw;
  font-size: 1.2vw;
  float: left;
  margin: 5% 1%;
  padding: 0.6vw;
  border: 0;
`;
export const SelectedItemTitle = styled.p `
  display: inline-block;
  margin:1%;
  font-size:1.2vw;
`;
export const RemoveButton = styled.button`
  background-color: #a28f8f;
  border-radius: 0.5vw;
  font-size: 0.8vw;
  padding: 0.4vw;
  color: #fff;
  border: 0;
`;
