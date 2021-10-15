import React from 'react'
import '@styles/ProductInfo.scss'

import add_to_cart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
    return (
        <>
            <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="bike" />
            <div className="ProductInfo">
                <p>$35,00</p>
                <p>Bike</p>
                <p>With it's practical position
                    this bike also fulfills a
                    decorative function, add your
                    hall or workspace.
                </p>
                <button className="primary-button add-to-cart-button">
                    <img src={add_to_cart} alt="add to cart" />
                    Add to cart
                </button>
            </div>
        </>
    );
}

export default ProductInfo;