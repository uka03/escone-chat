import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebaseConfig";
import "moment/locale/cs";

export default function Chat(props) {
  const { room } = props;
  const messageRef = collection(db, "message");
  const [messages, setMessages] = useState();
  const [isMe, setIsMe] = useState(
    auth.currentUser && auth.currentUser.displayName
  );

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const queryMessage = query(
      messageRef,
      where("room", "==", room),
      orderBy("createAt")
    );

    onSnapshot(queryMessage, (snapShot) => {
      let messages = [];

      snapShot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
  }, []);

  async function sumbitHandler(e) {
    e.preventDefault();
    if (e.target.message.value == "") return;
    let date = new Date();
    console.log(date);
    await addDoc(messageRef, {
      message: e.target.message.value,
      createAt: date,
      user: auth.currentUser.displayName,
      room,
    });

    e.target.message.value = "";
  }
  return (
    <div className="w-full h-full flex flex-col gap-3 justify-between">
      <div className="w-full bg-[#23D3BD] mt-[-20px] p-3 rounded-full text-xl">
        welcome in <span className="uppercase">{room}</span>
      </div>
      <div className="w-full  h-10/12 overflow-scroll p-5 flex flex-col gap-2">
        {messages &&
          messages.map((message, id) => {
            let date = "";
            try {
              date = message.createAt.toDate();
              let day = date.getDate();
              let month = date.getMonth() + 1;
              let year = date.getFullYear();
              let hours = date.getHours();
              let minutes = date.getMinutes();
              let seconds = date.getSeconds();

              date = `${hours < 10 ? `0${hours}` : hours}:${
                minutes < 10 ? `0${minutes}` : minutes
              }:${seconds < 10 ? `0${seconds}` : seconds}  `;
            } catch (error) {
              console.log(error);
            }

            return (
              <div className="w-full flex flex-col" key={id}>
                <p
                  className={
                    isMe == message.user
                      ? `self-end text-gray-400`
                      : `self-start  text-gray-400`
                  }
                >
                  {date}
                </p>
                <div
                  className={
                    isMe == message.user
                      ? `self-end bg-[#23D3BD] flex p-3 rounded-ee-[50px] rounded-2xl gap-2`
                      : `self-start bg-[#b4b4b4] flex p-3 rounded-es-[50px] rounded-2xl gap-2`
                  }
                  key={id}
                >
                  <p>{isMe == message.user ? "me : " : `${message.user} : `}</p>
                  <p>{message.message}</p>
                </div>
              </div>
            );
          })}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={sumbitHandler}
        className="w-full flex bg-[#b4b4b4] px-2 py-2 rounded-full gap-2 self-end"
      >
        <input
          type="text"
          name="message"
          className="w-11/12 bg-transparent rounded-full px-3 active:border-none"
        />
        <button type="submit" className="p-2 bg-[#23D3BD] rounded-full px-6">
          send
        </button>
      </form>
    </div>
  );
}
