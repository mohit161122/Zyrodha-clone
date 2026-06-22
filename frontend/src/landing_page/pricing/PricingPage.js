import React from "react";
import Hero from './Hero';

import OpenAccount from "../OpenAccount";
import Brokrage from "./Brokerage";

function PricingPage() {
  return (
    <>
      <Hero/>
      <OpenAccount />
      <Brokrage />
    </>
  );
}

export default PricingPage;
