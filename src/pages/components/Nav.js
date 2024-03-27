import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <ul className="mnue">
          <li>
            <Link to={"/login"}>login</Link>
          </li>
          <li>
            {" "}
            <Link to={"/"}>Blogs</Link>
          </li>
          <li className="logo">
            {" "}
            <Link to={"/profile"}>My Blog</Link>
          </li>
          <li>
            {" "}
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            {" "}
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
