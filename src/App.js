import React, { useReducer } from 'react';
import './App.css';

const products = [
  {
    name: 'Bmw',
    price: 500,
    imgurl:' https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png',
  },
  {
    name: 'benz',
    price: 1000,
    imgurl:' https://freepngimg.com/thumb/car/3-2-car-free-download-png.png',
  },
  {
    name: 'audi',
    price: 1200,
    imgurl:' https://pngimg.com/uploads/mercedes/mercedes_PNG80135.png',
  } , 
  
  {
    name: 'porsche',
    imgurl:' https://vectorforfree.com/wp-content/uploads/2019/04/BMW_Car_PNG_VectorForFree.jpg',
    price: 1300
  },
  {
    name:"rolls royce",
    imgurl:' https://freepngimg.com/thumb/car/4-2-car-png-hd.png',
     price: 1400
  },
  {
    name: 'aston martin',
    imgurl:' https://www.pngkey.com/png/full/191-1917243_budget-car-and-truck-rental-bc-large-car.png',
    price:1800
  },
  {
    name: "bentley",
    imgurl:' http://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Tesla-Model-S-Red-Car-PNG-Image.png',
    price: 2500
  },
  {
    name:'gased',
    imgurl:' https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png',
    price: 2500
  },
];

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}

function getTotal(cart) {
  const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
  return total.toLocaleString(undefined, currencyOptions)
}


function cartReducer(state, action) {
  switch(action.type) {
    case 'add':
      return [...state, action.product];
    case 'remove':
      const productIndex = state.findIndex(item => item.name === action.product.name);
      if(productIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(productIndex, 1)
      return update
    default:
      return state;
  }
}

export default function Product() {
  const [cart, setCart] = useReducer(cartReducer, []);

  function add(product) {
    setCart({ product, type: 'add' });
  }

  function remove(product) {
    setCart({ product, type: 'remove' });
  }

  return(
    <div className="wrapper-divsions">
      <div>
        Shopping Cart:<b>{cart.length}</b> total items.
      </div>
      <div>Total:Rs<b>{getTotal(cart)}</b></div>
      <div className="secdiv">

      
        {products.map(product => (
          <div className="maindivwraper" key={product.name}>
           
           <div className = "imagwraper"><img src={product.imgurl} alt="imag"/></div>  
           <span>{product.name}</span><br></br>
              <span>{product.price}</span><br></br>
            <button onClick={() => add(product)}>Add</button>
            <button onClick={() => remove(product)}>Remove</button>
          </div>
        ))}
        </div>

      
    </div>
  )

}