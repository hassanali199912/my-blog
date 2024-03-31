// ===============   Styles         =============== //
//bootstratp style
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/reset.css";
import "./styles/style.css";
import "./styles/responsive.css";

// =============== Third Party =============== //
import { Route, Routes } from "react-router-dom";
import Wrapper from "./pages/components/Wrapper";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./pages/components/Nav";
import Footer from "./pages/components/Footer";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import NewBlog from "./pages/components/NewBlog";
import SinglePostPage from "./pages/SinglePostPage";
import Singup from "./pages/Singup";
import Profile from "./pages/Profile";
import { useEffect } from "react";
import { Checklogin } from "./services/LogoutToken";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/post/:id",
    element: <SinglePostPage />,
  },
  {
    path: "/create",
    element: <NewBlog />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/singup",
    element: <Singup />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    Checklogin();
  }, []);

  return (
    <>
      <Nav />
      {/* <Wrapper> */}
      <Routes>
        {routes.map((item, index) => (
          <Route key={index} exact path={item.path} element={item.element} />
        ))}
      </Routes>
      {/* </Wrapper> */}
      <Footer />
    </>
  );
}

export default App;
