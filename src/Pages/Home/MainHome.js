import { Fragment } from "react";

import Header from "./Header";
import Main from "./Main";
import Speicaliest from "./Speicaliest";
import Ui from "./Ui";

const MainHome = function () {
  return (
    <Fragment>
      <Header />
      <Main />
      <Speicaliest />
      <Ui />
    </Fragment>
  );
};

export default MainHome;
