import React from 'react'
import '../styles/ShoppingCartItem.scss'

const ShoppingCartIltem = () => {
    return (
        <div className="ShoppingCartItem">
            <figure>
                <img src="https://images.pexels.com/photos/5914907/pexels-photo-5914907.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src="./assets/Icons/icon_close.png" alt="close" />
        </div>
    );
}

export default ShoppingCartIltem;