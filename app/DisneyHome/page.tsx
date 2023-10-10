"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import { ImageSlider } from "../Components";
import { Viewers } from "../Components";
import { Movies } from "../Components";

const DisneyHome = () => {
  return (
    <div className="DisneyHomeContainer">
      <ImageSlider />
      <Viewers />
      <Movies />
    </div>
  );
};

export default DisneyHome;
