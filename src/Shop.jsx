import ShopComponent from "./ShopComponent";
import glock17 from "./assets/handguns/glock17.png";
import "./shop.scss";
export default function Shop() {
  return (
    <div
      className="Shop"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "4rem"
      }}
    >
      <div
        className="container"
        style={{ marginTop: "-8rem", display: "flex", columnGap: "6rem" }}
      >
        <ShopComponent img={glock17} />
        <ShopComponent img={glock17} />
        <ShopComponent img={glock17} />
        <ShopComponent img={glock17} />
      </div>
    </div>
  );
}
