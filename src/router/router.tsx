
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClassroomCreate from "../page/classroom/createClassroom/page";
import ClassroomList from "../page/classroom/listclassroom/page";
import Login from "../page/login/page";
import Profile from "../page/profile/page";
import ReapplicationCreate from "../page/reapplication/createReapplication/page";
import ReapplicationList from "../page/reapplication/listReapplication/page";
import RecoverPassword from "../page/recoverpassword/page";
import SignUp from "../page/signup/page";
import PrivateRoute from "./privaterouter";

const RoutesApp = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/login"  />
          <Route element={<SignUp />} path="/cadastro"  />
          <Route element={<RecoverPassword />} path="/recuperar"  />
          <Route element={<PrivateRoute Component={<ReapplicationList />} />} path="/"  />
          <Route element={<PrivateRoute Component={<Profile />} />} path="/perfil"  />
          <Route element={<PrivateRoute Component={<ClassroomList />} />} path="/turmas" />
          <Route element={<PrivateRoute Component={<ClassroomCreate />} />} path="/turmas/criar" />
          <Route element={<PrivateRoute Component={<ReapplicationList />} />} path="/reaplicacoes" />
          <Route element={<PrivateRoute Component={<ReapplicationCreate />} />} path="/reaplicacoes/criar" />

          {/* <Route path="/*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RoutesApp;
  