import styled from 'styled-components';

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;

export const QuantityDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
  width: 125px;
  height: 40px;
  background: #FF6600;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  :hover {
    background: #e86005;
    transition: 0.3s;
   
  }
  p {
    font-size: 17px;
    margin: 0;
    color: white;
  }
  `

  export const CartItem = styled.div`
  display:grid;
  `

  export const QuantityButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 17px;
  width: 17px;
  height: 17px;
  background: white;
  border-radius: 50%;
  padding: 5px;
  margin: 2px auto;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    transition: 1s;
  }
  p {
    font-size: 17px;
    margin: 0;
    color: #60c95d;
  }
`;

export const CheckOutButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  width: 225px;
  height: 30px;
  background: #FF6600;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  :hover {
    background: #e86005;
    transform: scale(1.1);
    transition: 0.3s;
  }
  p {
    font-size: 20px;
    margin: 0;
    color: white;
  }
  `