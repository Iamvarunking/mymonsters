import React from 'react';
import './cart-list.styles.css';
import {Cart} from'../cart/cart.component';

export const CartList = props => (   
<div className='cart-list'>{props.monsters.map(monster => <Cart key={monster.id} monster={monster}/>
)}
</div>
)