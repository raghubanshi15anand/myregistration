import React from 'react';
// import 'antd/dist/antd.css';
// import { Card } from 'antd';
import './Product.css';


const Product = () => {

  return (  
    <div>  
    <div class="card"> 
      <div class="card-image"></div>
      <div class="card-text">
        <span class="date"></span>
        <h2>	Galaxy F13 	</h2>
        <p>₹12999.00</p>
      </div>
    </div>

    <div class="card">
      <div class="card-image card2"></div>
      <div class="card-text card2">
        <span class="date"> </span>
        <h2>Apple iPhone 13 Pro Max (512GB) - Gold</h2>
        <p> ₹1,55,900.00 </p>
      </div>     
    </div>

    <div class="card">
        <div class="card-image card3"></div>
        <div class="card-text card3">
          <span class="date"> </span>
          <h2> OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage) </h2>
          <p> ₹11,990.00 </p>
        </div>        
      </div>

      <div class="card">
        <div class="card-image card4"></div>
        <div class="card-text card3">
          <span class="date"></span>
          <h2> Low Cost </h2>
          <p> Monitor all the sensitive information of your machines at an minimal cost. </p>
        </div>
      </div>

      <div class="card">
        <div class="card-image card5"></div>
        <div class="card-text card3">
          <span class="date"></span>
          <h2>Predictive AI</h2>
          <p>Leverage the AI algorithms to detect occurrence of error.</p>
        </div>       
      </div>

      <div class="card">
        <div class="card-image card6"></div>
        <div class="card-text card3">
          <span class="date"></span>
          <h2>Multiple Asset monitoring</h2>
          <p>Track multiple assets in a common place</p>
        </div>       
      </div>
    </div>
  );
}

export default Product;

