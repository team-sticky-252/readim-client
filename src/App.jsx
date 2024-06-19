import { Outlet } from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import CardContainer from "./components/Card/CardContainer";
import ToastContainer from "./components/Toast/ToastContainer";

function App() {
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
