import "./shop.scss";

export default function ShopComponent({ img, name, price }) {
  return (
    <div className="ShopComponent">
      <div
        style={{ backgroundImage: `url(${img})` }}
        id="image-container"
      ></div>
      <div>
        <h2>{name}</h2>
        <h4 style={{ marginTop: "1.7rem" }}>{price}€</h4>
      </div>
    </div>
  );
}
