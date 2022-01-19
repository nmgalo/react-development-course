import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header>
      <div></div>
      <div className="menu" onClick={() => setIsMenuActive(!isMenuActive)}>
        <span>Menu</span>
      </div>

      {isMenuActive && (
        <div className="menu_dialog">
          <nav>
            <div>
              <Link to="/" onClick={() => setIsMenuActive(false)}>
                Home
              </Link>
            </div>
            <div>
              <Link to="/about" onClick={() => setIsMenuActive(false)}>
                About me
              </Link>
            </div>
            <div>
              <Link to="/portfolio" onClick={() => setIsMenuActive(false)}>
                Portfolio
              </Link>
            </div>
            <div>
              <Link to="/contact" onClick={() => setIsMenuActive(false)}>
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
