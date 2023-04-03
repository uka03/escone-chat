import React from "react";

export default function Navbar(props) {
  return (
    <div className="h-[73px] w-full bg-[#081325] border-b ">
      <div className="h-full container max-w-screen-xl mx-auto flex items-center justify-between gap-3 ">
        <div className=" w-2/12 h-full flex items-center">
          <p className="text-3xl text-[#23D3BD] ">{"{ EScone }"}</p>
        </div>
        <div className="h-full w-6/12  flex items-center">
          <input
            type="text"
            placeholder="Search for a game, event..."
            className=" w-full h-2/3 bg-[#081325]"
          />
        </div>
        <div className="w-4/12 flex justify-center gap-3">
          <button className="w-[110px] h-[36px] bg-[#575858] text-[#23D3BD] border rounded-xl font-bold border-black">
            Sign in
          </button>
          <button className="w-[110px] h-[36px] bg-[#23D3BD] text-[#081325] rounded-xl font-bold">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
