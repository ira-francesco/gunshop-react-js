import { useCart } from "./CartContext";
import CartItem from "./CartItem";
import "./ShoppingCart.scss";

const ShoppingCart = () => {
  const { cartItems, removeItem, updateQuantity, total } = useCart();

  return (
    <div className="shopping-cart">
      <h1 className="cart-title">Carrello</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Il carrello è vuoto.</p>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        ))
      )}
      <div className="cart-total">
        <p className="total-amount">Totale: €{total.toFixed(2)}</p>
        <button className="checkout-button">Procedi al pagamento</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
