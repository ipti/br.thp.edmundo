
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClassroomCreate from "../page/classroom/createClassroom/page";
import ClassroomList from "../page/classroom/listclassroom/page";
import Login from "../page/login/page";
import Profile from "../page/profile/page";
import ReapplicationCreate from "../page/reapplication/createReapplication/page";
import ReapplicationList from "../page/reapplication/listReapplication/page";
import RecoverPassword from "../page/recoverpassword/page";
import PrivateRoute from "./privaterouter";
import ClassroomOne from "../page/classroom/oneClassroom/page";
import MembersClassroom from "../page/classroom/membersClassroom/page";
import UserList from "../page/user/listUser/page";
import UserCreate from "../page/user/createUser/page";
import ModuleList from "../page/module/listModule/page";
import ModulesCreate from "../page/module/createModule/page";
import ModuleOne from "../page/module/oneModule/page";
import ClassesCreate from "../page/classes/createClasses/page";
import ActivitiesCreate from "../page/activities/createActivities/page";
import ClassroomModules from "../page/classroom/modulesClassroom/page";
import Home from "../page/home/page";
import HomeModules from "../page/homeModule/page";
import HomeActivities from "../page/homeActivities/page";
import ClassroomActivities from "../page/classroom/activitiesClassroom/page";
import ClassroomCorrectionOfActivities from "../page/classroom/correctionOfActivitiesClassroom/page";
import ModulesEdit from "../page/module/editModule/page";
import ActivitiesEdit from "../page/activities/editActivities/page";
import ActivitiesSent from "../page/classroom/listUserActivitiesClassroom/page";
import MemberOne from "../page/classroom/oneMember/page";
import ClassesEdit from "../page/classes/createClasses copy/page";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<RecoverPassword />} path="/recuperar" />
        <Route element={<PrivateRoute Component={<Home />} />} path="/" />
        <Route element={<PrivateRoute Component={<HomeModules />} />} path="/turma/:idClassroom/modulo/:idModule" />
        <Route element={<PrivateRoute Component={<HomeActivities />} />} path="/turma/:idClassroom/modulo/:idModule/atividade/:idActivities" />
        <Route element={<PrivateRoute Component={<Profile />} />} path="/perfil" />

        <Route element={<PrivateRoute Component={<ClassroomList />} />} path="/turmas" />
        <Route element={<PrivateRoute Component={<ClassroomOne />} />} path="/turma/:id" />
        <Route element={<PrivateRoute Component={<MembersClassroom />} />} path="/turma/:id/membros" />
        <Route element={<PrivateRoute Component={<MemberOne />} />} path="/turma/:id/membros/:idMember" />
        <Route element={<PrivateRoute Component={<ClassroomModules />} />} path="/turma/:id/modulos" />
        <Route element={<PrivateRoute Component={<ClassroomActivities />} />} path="/turma/:id/atividades" />
        <Route element={<PrivateRoute Component={<ActivitiesSent />} />} path="/turma/:id/atividades/:idClassroomUser" />
        <Route element={<PrivateRoute Component={<ClassroomCorrectionOfActivities />} />} path="/turma/:id/atividades/:idClassroomUser/correcao/:idUserActivities" />
        <Route element={<PrivateRoute Component={<ClassroomCreate />} />} path="/turmas/criar" />
        <Route element={<PrivateRoute Component={<ReapplicationList />} />} path="/reaplicacoes" />
        <Route element={<PrivateRoute Component={<ReapplicationCreate />} />} path="/reaplicacoes/criar" />
        <Route element={<PrivateRoute Component={<ModuleList />} />} path="/modulos" />
        <Route element={<PrivateRoute Component={<ModulesCreate />} />} path="/modulos/criar" />
        <Route element={<PrivateRoute Component={<ModuleOne />} />} path="/modulos/:id" />
        <Route element={<PrivateRoute Component={<ModulesEdit />} />} path="/modulos/:id/editar" />
        <Route element={<PrivateRoute Component={<ClassesCreate />} />} path="/aulas/:idModule/criar" />
        <Route element={<PrivateRoute Component={<ClassesEdit />} />} path="/aulas/:idModule/editar/:idClasses" />
        <Route element={<PrivateRoute Component={<ActivitiesCreate />} />} path="/atividades/:idClasses/criar/:idModule" />
        <Route element={<PrivateRoute Component={<ActivitiesEdit />} />} path="/atividades/:id" />

        


        <Route element={<PrivateRoute Component={<UserList />} />} path="/usuarios" />
        <Route element={<PrivateRoute Component={<UserCreate />} />} path="/usuarios/criar" />


        {/* <Route path="/*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
