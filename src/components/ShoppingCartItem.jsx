import React from 'react'
import '@styles/ShoppingCartItem.scss'

import close from '@icons/icon_close.png';

const ShoppingCartIltem = () => {
    return (
        <div className="ShoppingCartItem">
            <figure>
                <img src="https://images.pexels.com/photos/5914907/pexels-photo-5914907.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src={close} alt="close" />
        </div>
    );
}

export default ShoppingCartIltem;