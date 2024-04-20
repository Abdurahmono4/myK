import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// Layout
import MainLayout from "./Layout/MainLayout";

// pages
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";

// components
import ProtectedRotes from "./components/ProtectedRotes";
import Navbar from "./components/Navbar";

//context
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/useGlobalContext";

//firebase
import { auth } from "./firebase/fireBaseConfig";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const { user } = useContext(GlobalContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRotes user={user}>
          <MainLayout />
        </ProtectedRotes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/signin",
      element: user ? <Navigate to="/" /> : <Signin />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      }
    });
  }, []);
  return <RouterProvider router={routes} />;
}

export default App;
