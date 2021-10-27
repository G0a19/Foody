import { Fragment } from "react";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

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
