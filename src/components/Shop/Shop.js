import React, { useState } from 'react'
import fakeData from '../../fakeData'
import androids from '../../fakeData/android'
import cameras from '../../fakeData/camera'
import laptops from '../../fakeData/laptop'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'

const Shop = () => {
    // const fakeData = [...cameras, ...androids, ...laptops];
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product handleAddProduct={handleAddProduct} product={pd} />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>

    )
}

export default Shop
