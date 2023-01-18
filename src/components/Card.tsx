import React from "react";
import App from "../App";
import "./Card.css";


interface ICard {
  img: string;
  title: string;
  descricao: string;
  price: number;

}




const Card = ({ img, title, price }: ICard ) => {

  const [amountCart, setAmountCart] = React.useState(0);

  function addCart(){
    setAmountCart(amountCart + 1);    
  }

  return (
    
    <div className="col-md-3 divContainer">
     <img src={img} className="card-img"></img>
      <div className="d-flex card-container">        
        <p className="card-title">{title}</p>
        <span className="card-price">R$ {price}</span>        
        <button onClick={addCart} className="btn card-button">Add ao Carrinho</button>
      </div>
    </div>
   
  );
};

export default Card;
