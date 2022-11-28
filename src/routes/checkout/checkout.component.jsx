import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';


const calculateTotal = (cartItems) => {
  console.log(cartItems)
  return cartItems.reduce((total, cartItem) => {
    return total + (cartItem.quantity * cartItem.price)
  }, 0);
}

const Checkout = () => {

  const { cartItems } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
      ))}
      <span>Total ${calculateTotal(cartItems)}</span>
    </div>
  );
}

export default Checkout;