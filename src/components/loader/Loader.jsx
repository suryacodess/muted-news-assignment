import React from "react";
import "../loader/style.css";

export default function Loader() {
  return (
    // loader component
    <div className="w-full py-20">
      <div className="max-w-[1400px] mx-auto flex justify-center items-center ">
        <span className="loader"></span>
      </div>
    </div>
  );
}
