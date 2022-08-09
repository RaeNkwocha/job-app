import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = false;
    },
  };
  return (
    <Route
      {...rest}
      render={() => {
        return fakeAuth.isAuthenticated === true ? (
          children
        ) : (
          <Redirect to="/user-pages/login-1" />
        );
      }}
    />
  );
}
export default PrivateRoute;
