import { useCart } from "./CartContext";
import ShopComponent from "./ShopComponent";
import "./shop.scss";
import { smartphones, laptops, backpacks } from "./products";

const Shop = () => {
  const { addToCart } = useCart();

  return (
    <div className="Shop" style={{ padding: "4rem" }}>
      {[{ data: smartphones, idOffset: 0 }, { data: laptops, idOffset: 100 }, { data: backpacks, idOffset: 200 }].map(
        (category, index) => (
          <div
            key={index}
            className="container"
            style={{ marginTop: "12rem", display: "flex", columnGap: "6rem", width: "100%" }}
          >
            {category.data.map((item, i) => (
              <div key={i} className="shop-item">
                <ShopComponent
                  img={item.image}
                  name={item.name}
                  price={item.price}
                />
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart({ id: i + category.idOffset, ...item })}
                >
                  Aggiungi al carrello
                </button>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Shop;
