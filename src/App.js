import { Fragment } from "react";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import MainHome from "./Pages/Home/MainHome";

function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <MainHome />
      </Route>
    </Fragment>
  );
}

export default App;
