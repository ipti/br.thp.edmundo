
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../page/login/page";
import SignUp from "../page/signup/page";

const RoutesApp = () => {
    return (
      <BrowserRouter>
        <Routes>

          <Route element={<Login />} path="/login"  />
          <Route element={<SignUp />} path="/cadastro"  />
          {/* <Route path="/*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RoutesApp;
  