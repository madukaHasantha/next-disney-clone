"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "@/firebase";

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
