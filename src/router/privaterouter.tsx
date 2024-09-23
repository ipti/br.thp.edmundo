
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../Components/Layout/layout";
import { isAuthenticated } from "../service/localstorage";
import AplicationProvider, { AplicationContext } from "../context/context";
import { ROLE } from "../Controller/controllerGlobal";
import LayoutStudent from "../Components/LayoutStudent/layout";
import { ProgressSpinner } from "primereact/progressspinner";

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
    </> : <ProgressSpinner />}
    </>
  )
}



export default PrivateRoute;