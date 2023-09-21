import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className="w-full px-5 ">
      <div className="py-36  flex justify-center items-center flex-col">
        <h1 className=" font-bold text-3xl">Page not found!</h1>
        <Link to="/" className="underline mt-5">
          Go back
        </Link>
      </div>
    </main>
  );
}
