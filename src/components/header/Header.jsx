import React from "react";

export default function Header() {
  return (
    <header
      className="w-full px-5"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }}
    >
      <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center py-5">
        <div className="">
          <h1 className="text-3xl font-bold">Muted News</h1>
        </div>
        <nav>
          <ul>
            <li>Home</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
