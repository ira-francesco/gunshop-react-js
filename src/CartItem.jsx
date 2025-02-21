const CartItem = ({ item, updateQuantity, removeItem }) => {
    const handleRemove = () => {
      removeItem(item.id);  // Rimuove l'elemento dal carrello
    };
  
    const handleQuantityChange = (event) => {
      updateQuantity(item.id, parseInt(event.target.value, 10));  // Aggiorna la quantità
    };
  
    return (
      <div className="cart-item">
        <h3>{item.name}</h3>
        <p>€{item.price.toFixed(2)}</p>
        <input
          type="number"
          value={item.quantity}
          min="1"
          onChange={handleQuantityChange}
        />
        <button onClick={handleRemove} className="remove-button">
          Rimuovi
        </button>
      </div>
    );
  };
  
  export default CartItem;
  