import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="product">
       <img src={image}alt="" />
      <div className="product_info">
        <p>{truncate(title, 100)}</p>
      <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
       
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_,i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

     
      <button onClick={addToBasket}>add to Basket</button>
    </div>
  );
}

export default Product

