import React from 'react';
import './cart.styles.css';

export const Cart = props => (
    <div className='cart-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
    </div>
       
)