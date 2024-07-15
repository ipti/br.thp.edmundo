
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../page/login/page";

const RoutesApp = () => {
    return (
      <BrowserRouter>
        <Routes>

          <Route element={<Login />} path="/login"  />
          {/* <Route path="/*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RoutesApp;
  