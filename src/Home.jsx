import "./home.scss";
import { Link } from "react-router-dom";
import backgroundHomeImage from "./background.jpg";

export default function Home() {
  return (
    <div
      className="Home"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "4rem",
        backgroundImage: `url(${backgroundHomeImage})`
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start"
        }}
      >
        <h1 style={{ color: "#fff", fontSize: "4rem", marginTop: "-10rem" }}>
          Tech & Travel Equipment
        </h1>
        <h3
          style={{
            color: "#fff",
            marginTop: "1.5rem",
            fontSize: "2rem",
            fontWeight: "lighter"
          }}
        >
          We guarantee you the best quality for your tech.
        </h3>
        <Link to="/Shop" style={{ textDecoration: "none", color: "#fff", marginTop: "60px" }}>
          <button style={{}}>COMPRA ORA</button>
        </Link>
      </div>
    </div>
  );
}
