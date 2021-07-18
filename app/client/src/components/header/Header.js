import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-margin">
        <Link to="/" className="header-title">
          <h1>Let's eat</h1>
        </Link>
      </div>
    </header>
  );
}
