import React from 'react';
import './Product.css';
import * as FaIcons from 'react-icons/fa'

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3 className="product-name">{name}</h3><br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p><br />
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className="add-button" 
                onClick={() => props.handleAddProduct(props.product)}><FaIcons.FaShoppingCart /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;