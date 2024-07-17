
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../page/login/page";
import SignUp from "../page/signup/page";
import RecoverPassword from "../page/recoverpassword/page";
import Home from "../page/home/page";

const RoutesApp = () => {
    return (
      <BrowserRouter>
        <Routes>

          <Route element={<Login />} path="/login"  />
          <Route element={<SignUp />} path="/cadastro"  />
          <Route element={<RecoverPassword />} path="/recuperar"  />
          <Route element={<Home />} path="/"  />

          {/* <Route path="/*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RoutesApp;
  