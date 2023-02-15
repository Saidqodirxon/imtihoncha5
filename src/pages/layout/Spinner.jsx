import React, { Fragment } from "react";
import SpinnerSVG from "../../assets/img/spin.svg";
const Spinner = () => (
  <Fragment>
    <div className="spinner">
      <img src={SpinnerSVG} alt="spinner" />
    </div>
  </Fragment>
);

export default Spinner;
