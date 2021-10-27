import { Fragment } from "react";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Pages/Home/Header";
import Main from "./Pages/Home/Main";

function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <Header />
        <Main />
      </Route>
    </Fragment>
  );
}

export default App;
