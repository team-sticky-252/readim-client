import { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import CardContainer from "./components/Card/CardContainer";
import ToastContainer from "./components/Toast/ToastContainer";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem("wpm")) {
      window.localStorage.setItem("wpm", "202");
      navigate("/modal/welcome");
    }
  }, [window.localStorage.getItem("wpm")]);

  return (
    <>
      <HeaderContainer />
      <CardContainer />
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
