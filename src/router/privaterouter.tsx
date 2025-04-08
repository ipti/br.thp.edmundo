
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../Components/Layout/layout";
import LayoutStudent from "../Components/LayoutStudent/layout";
import Loading from "../Components/Loading";
import AplicationProvider, { AplicationContext } from "../context/context";
import { ROLE } from "../Controller/controllerGlobal";
import { isAuthenticated } from "../service/localstorage";

const PrivateRoute = ({ Component }: { Component: React.ReactNode }) => {

  return isAuthenticated() ?
    <AplicationProvider>
      <LayoutVerify Component={Component} />
    </AplicationProvider>
    : <Navigate to="/login" />
}


const LayoutVerify = ({ Component }: { Component: React.ReactNode }) => {


  const propsAplication = useContext(AplicationContext)
  return (
    <>
    {propsAplication?.user ?<>
      {propsAplication?.user?.role === ROLE.STUDENT ? <LayoutStudent>{Component}</LayoutStudent> : <Layout>

        {Component}
      </Layout>}
    </> : <Loading />}
    </>
  )
}



export default PrivateRoute;