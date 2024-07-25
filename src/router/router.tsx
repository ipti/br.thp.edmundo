
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../page/login/page";
import SignUp from "../page/signup/page";
import RecoverPassword from "../page/recoverpassword/page";
import Home from "../page/home/page";
import PrivateRoute from "./privaterouter";
import Profile from "../page/profile/page";
import ClassroomList from "../page/classroom/listclassroom/page";
import ClassroomCreate from "../page/classroom/createClassroom/page";

const RoutesApp = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/login"  />
          <Route element={<SignUp />} path="/cadastro"  />
          <Route element={<RecoverPassword />} path="/recuperar"  />
          <Route element={<PrivateRoute Component={<Home />} />} path="/"  />
          <Route element={<PrivateRoute Component={<Profile />} />} path="/perfil"  />
          <Route element={<PrivateRoute Component={<ClassroomList />} />} path="/turmas" />
          <Route element={<PrivateRoute Component={<ClassroomCreate />} />} path="/turmas/criar" />

          {/* <Route path="/*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RoutesApp;
  