import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import checkTokenAndDeleteUser from "../../services/LogoutToken";
import { jwtDecode } from "jwt-decode";

export default function Nav() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  useEffect(() => {
    const userToken = localStorage.getItem("user");
    console.log(userToken);
    if (userToken) {
      const foundUser = JSON.parse(userToken);
      const decoded = jwtDecode(foundUser.token);
      const expireDate = decoded.exp * 1000;
      // foundUser.token && checkTokenAndDeleteUser(expireDate);
      setUser(foundUser);
    }
  }, []);

  return (
    <>
      <nav className="nav">
        <ul className="mnue">
          <li>
            {user ? (
              <>
                <Link to={""} onClick={handleLogout}>
                  <i
                    className="fa-solid fa-right-from-bracket"
                    style={{
                      padding: "0 0.5rem",
                      transform: "rotate(180deg)",
                    }}
                  />
                </Link>
              </>
            ) : (
              <>
                <Link to={"/login"}>login</Link>
              </>
            )}
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
