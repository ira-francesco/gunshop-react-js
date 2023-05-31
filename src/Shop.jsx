import ShopComponent from "./ShopComponent";
import "./shop.scss";
import { handguns, rifles } from "./products";
export default function Shop() {
  return (
    <div
      className="Shop"
      style={{
        padding: "4rem"
      }}
    >
      <div
        className="container"
        style={{
          marginTop: "12rem",
          display: "flex",
          columnGap: "6rem",
          width: "100%"
        }}
      >
        {handguns.map((handgun, i) => (
          <ShopComponent
            img={handgun.image}
            name={handgun.name}
            price={handgun.price}
            key={i}
          />
        ))}
      </div>
      <div
        id="rifles"
        className="container"
        style={{
          marginTop: "12rem",
          display: "flex",
          columnGap: "6rem",
          width: "100%"
        }}
      >
        {rifles.map((rifle, i) => (
          <ShopComponent
            img={rifle.image}
            name={rifle.name}
            price={rifle.price}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
