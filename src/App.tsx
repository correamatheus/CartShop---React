import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";


interface ICard {
  image: string;
  title: string;
  description: string;
  id: number;
  price: number;
}

function App() {
  const [product, setProduct] = useState<ICard[] | null>(null);
  const [amountCart, setAmountCart] = useState(0);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((json) => setProduct(json));
    
  }, []);




  return (
    <>
   
      <nav className="navbar navbar-light bg-light mb-4">
        <div className="container">
          <a className="navbar-brand" href="#">
            Polibras
          </a>

        </div>
      </nav>

      <div className="container">
        <div className="row">
          {product && product.map((product) => {
              return (
                <Card
                  key={product.id}
                  img={product.image}
                  title={product.title}
                  descricao={product.description}
                  price={product.price}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
