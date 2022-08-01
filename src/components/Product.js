import React from 'react';
// import 'antd/dist/antd.css';
// import { Card } from 'antd';
import './Product.css';


const Product = () => {

  return (  
    <div class="all-container">  
    <div class="card"> 
      <div class="card-image"></div>
      <div class="card-text">
        <span class="date"></span>
        <h2>	Galaxy F13 	</h2>
        <h3>₹12999.00</h3>
      </div>
    </div>

    <div class="card">
      <div class="card-image card2"></div>
      <div class="card-text card2">
        <span class="date"> </span>
        <h2>Apple iPhone 13 Pro Max (512GB) - Gold</h2>
        <h3> ₹1,55,900.00 </h3>
      </div>     
    </div>

    <div class="card">
        <div class="card-image card3"></div>
        <div class="card-text card3">
          <span class="date"> </span>
          <h2> OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage) </h2>
          <h3> ₹11,990.00 </h3>
        </div>        
      </div>

      <div class="card">
        <div class="card-image card4"></div>
        <div class="card-text card3">
          <span class="date"></span>
          <h2> SONY XPERIA XA1 DUAL BLACK 32GB </h2>
          <h3> ₹10,996.00 </h3>
        </div>
      </div>

      <div class="card">
        <div class="card-image card5"></div>
        <div class="card-text card3">
          <span class="date"></span>
          <h2>Motorola G31 128 GB, 6 GB RAM, Meteorite Gray</h2>
          <h3>13,999.00.</h3>
        </div>       
      </div>

      <div class="card">
        <div class="card-image card6"></div>
        <div class="card-text card3">
          <span class="date"></span>
          <h2>New Original HTC Desire 10 Pro 4GB RAM 64GBg</h2>
          <h3>₹31,617</h3>
        </div>       
      </div>
    </div>
  );
}

export default Product;

