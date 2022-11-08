import { useEffect } from 'react';
import { createContext, useState } from 'react';


/*
  cartItem:
  { 
    id, 
    name, 
    price,
    imageUrl,
    quantity
  }
*/


const addCartItem = (cartItems, productToAdd) => {

  const existingItem = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });

  if (existingItem) {
    return cartItems.map((item) => {
      return item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
}


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { }
});


export const CartProvider = ({ children }) => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}