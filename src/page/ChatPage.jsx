import React from "react";

import Chat from "../components/Chat";

export default function ChatPage(props) {
  const { setRoom, room } = props;

  function enterChat(event) {
    event.preventDefault();
    setRoom(event.target.room.value);
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="flex w-full h-full ">
          <form
            action=""
            onSubmit={enterChat}
            className="flex flex-col gap-5 w-full"
          >
            <div className="bg-[#23D3BD] w-full h-[50px] flex items-center p-5 rounded-lg justify-around">
              <input
                type="text"
                name="room"
                className="w-10/12 bg-transparent placeholder:text-black px-5 py-1 border-b border-s rounded-full border-[#081325]"
                placeholder="Enter room"
              />
              <button
                type="submit"
                className="border-b border-s rounded-full border-[#081325] px-5 py-2 bg-[#149b8b] hover:bg-[#23D3BD]"
              >
                enter chat
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
