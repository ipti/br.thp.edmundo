
import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "../Components/Layout/layout";
import { isAuthenticated } from "../service/localstorage";

const PrivateRoute = ({ Component }: { Component: React.ReactNode }) => {

  return isAuthenticated() ?
      <Layout>
        {Component}
      </Layout>
    : <Navigate to="/register" />
}




export default PrivateRoute;