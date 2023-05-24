import { Link } from "react-router-dom";
import "./navbar.scss";
export default function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <ul id="ul-1">
          <li>
            <Link to="/">
              <span style={{}}>APOLLO </span>
              <span style={{ marginLeft: "-12px", color: "#eea441" }}>GRU</span>
            </Link>
          </li>
        </ul>
        <ul id="ul-2">
          <li>
            <Link to="/Shop">SHOP</Link>
          </li>
          <li>
            <Link to="/ShoppingCart">SHOPPING CART</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
