import { signOut } from "firebase/auth";
import { useState } from "react";

import Cookies from "universal-cookie";
import "./App.css";
import Auth from "./components/Auth.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar";

import { auth } from "./firebaseConfig";
import ChatPage from "./page/ChatPage.jsx";

function App() {
  const cookies = new Cookies();
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState();
  async function signOutHandler() {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  }

  return (
    <div className="bg-[#081325] h-[832px] w-full relative ">
      <Navbar />
      <button onClick={signOutHandler}>sign out</button>
      <div className=" flex gap-10 h-[500px] container max-w-screen-xl mx-auto items-center">
        <Sidebar />
        <div className=" w-full sm:w-10/12 border bg-[#102444] rounded-3xl p-10 h-full">
          <ChatPage
            setIsAuth={setIsAuth}
            isAuth={isAuth}
            setRoom={setRoom}
            room={room}
          />
        </div>
      </div>
      {!isAuth && (
        <div className="w-full h-[832px] fixed top-0 left-0 bg-[#081325] opacity-80 flex items-center justify-center">
          <Auth setIsAuth={setIsAuth} />
        </div>
      )}
    </div>
  );
}

export default App;
