import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prod) => total + prod.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 4){
        shipping = 12.99;
    }

    let tax = total / 10;

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision)
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items: {cart.length}</p>
            <p>Product price: ${formatNumber(total)}</p>
            <p>Shipping and Handeling: ${formatNumber(shipping)}</p>
            <p>Tax + VAT: ${formatNumber(tax)}</p>
            <p>Total price: ${ formatNumber(shipping + total)}</p>
        </div>
    );
};

export default Cart;