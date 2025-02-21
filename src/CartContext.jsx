import { createContext, useContext, useState } from "react";

// Crea il contesto
const CartContext = createContext();

// Crea un provider per il contesto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Funzione per aggiungere un prodotto al carrello
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Funzione per rimuovere un prodotto dal carrello
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Funzione per aggiornare la quantità di un prodotto
  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  // Calcolo del totale
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook per usare il contesto
export const useCart = () => {
  return useContext(CartContext);
};
