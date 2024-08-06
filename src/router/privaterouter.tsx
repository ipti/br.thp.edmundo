
import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "../Components/Layout/layout";
import { isAuthenticated } from "../service/localstorage";
import AplicationProvider from "../context/context";

const PrivateRoute = ({ Component }: { Component: React.ReactNode }) => {

  return isAuthenticated() ?
    <AplicationProvider>
      <Layout>

        {Component}
      </Layout>
    </AplicationProvider>
    : <Navigate to="/login" />
}




export default PrivateRoute;