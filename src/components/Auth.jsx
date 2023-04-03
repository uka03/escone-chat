import React from "react";
import { auth, provider } from "../firebaseConfig.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

export default function Auth(props) {
  const cookies = new Cookies();
  const { setIsAuth } = props;

  async function signinGoogle() {
    try {
      let result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-[500px] h-[450px] bg-[#f5f5f5] rounded-3xl p-10 ">
      <div className=" w-full flex justify-center text-3xl">{"{ EScone }"}</div>

      <div className="w-full h-full flex items-center flex-col gap-7 mt-10">
        <div className="w-full">
          <button
            onClick={signinGoogle}
            className={`w-full h-[45px] border border-[#081325] rounded-full`}
          >
            Sign in with google
          </button>
        </div>
        <div className="w-full flex items-center flex-col ">
          <div className="w-10 h-10 bg-[#f5f5f5] z-20 text-center">
            {" "}
            <p className>or</p>
          </div>

          <div className="border border-t-0 border-black w-full mt-[-27px]"></div>
        </div>
        <div className="w-full">
          <form className="flex flex-col w-full gap-4">
            <div className="w-full flex flex-col gap-2">
              <input
                type="text"
                placeholder="email"
                className="border border-black bg-transparent h-[40px] rounded-full p-4 placeholder:text-black"
              />
              <input
                type="password"
                placeholder="password"
                className="border border-black bg-transparent h-[40px] rounded-full p-4 placeholder:text-black"
              />
            </div>
            <div className="flex justify-between text-[11px] text-[#555555]">
              <p>don’t have an account?</p>
              <p>forgot password?</p>
            </div>
            <button
              type="submit"
              className="bg-[#23D3BD] rounded-full w-full h-[50px] text-[20px] font-light"
            >
              {" Sign in ->"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
