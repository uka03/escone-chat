import React, { useState } from "react";

export default function Sidebar(props) {
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="h-full w-[200px] border-e">
      <div className="flex flex-col gap-5">
        <button
          className={`w-[175px] h-[40px] rounded-xl text-start  ps-5 ${
            isActive == 1
              ? "bg-[#23D3BD] text-[#081325]"
              : "text-[#8b8b8b] hover:bg-[#212E43]"
          }`}
          onClick={() => setIsActive(1)}
        >
          Home
        </button>
        <button
          className={`w-[175px] h-[40px] rounded-xl text-start  ps-5 ${
            isActive == 2
              ? "bg-[#23D3BD] text-[#081325]"
              : "text-[#8b8b8b] hover:bg-[#212E43]"
          }`}
          onClick={() => setIsActive(2)}
        >
          Team
        </button>
        <button
          className={`w-[175px] h-[40px] rounded-xl text-start  ps-5 ${
            isActive == 3
              ? "bg-[#23D3BD] text-[#081325]"
              : "text-[#8b8b8b] hover:bg-[#212E43]"
          }`}
          onClick={() => setIsActive(3)}
        >
          News
        </button>
        <button
          className={`w-[175px] h-[40px] rounded-xl text-start  ps-5 ${
            isActive == 4
              ? "bg-[#23D3BD] text-[#081325]"
              : "text-[#8b8b8b] hover:bg-[#212E43]"
          }`}
          onClick={() => setIsActive(4)}
        >
          Map
        </button>
        <button
          className={`w-[175px] h-[40px] rounded-xl text-start  ps-5 ${
            isActive == 5
              ? "bg-[#23D3BD] text-[#081325]"
              : "text-[#8b8b8b] hover:bg-[#212E43]"
          }`}
          onClick={() => setIsActive(5)}
        >
          Shop
        </button>
        <button
          className={`w-[175px] h-[40px] rounded-xl text-start  ps-5 ${
            isActive == 6
              ? "bg-[#23D3BD] text-[#081325]"
              : "text-[#8b8b8b] hover:bg-[#212E43]"
          }`}
          onClick={() => setIsActive(6)}
        >
          Rank
        </button>
        <button
          className={`w-[175px] h-[40px] rounded-xl text-start  ps-5 ${
            isActive == 7
              ? "bg-[#23D3BD] text-[#081325]"
              : "text-[#8b8b8b] hover:bg-[#212E43]"
          }`}
          onClick={() => setIsActive(7)}
        >
          Video
        </button>
        <button
          className={`w-[175px] h-[40px] rounded-xl text-start  ps-5 ${
            isActive == 8
              ? "bg-[#23D3BD] text-[#081325]"
              : "text-[#8b8b8b] hover:bg-[#212E43]"
          }`}
          onClick={() => setIsActive(8)}
        >
          Chat
        </button>
      </div>
    </div>
  );
}
