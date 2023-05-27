import "./shop.scss";

export default function ShopComponent({ img }) {
  return (
    <div className="ShopComponent">
      <div
        style={{ backgroundImage: `url(${img})` }}
        id="image-container"
      ></div>
      <div>
        <h2>Glock 17</h2>
        <h4 style={{ marginTop: "1.7rem" }}>399.99€</h4>
      </div>
    </div>
  );
}
