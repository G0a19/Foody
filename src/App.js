import { Fragment } from "react";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./Pages/Home/Header";

function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <Header />
      </Route>
    </Fragment>
  );
}

export default App;
