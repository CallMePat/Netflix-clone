import React, { useState } from "react";
import "../../App.css";
import { SignupScreen } from './SignupScreen';

export const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginscreen">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
          className="fixed left-0 w-32 object-contain pl-5 pt-5"
        />

        <div className="fixed right-5 top-5">
          <button
            className="cursor-pointer px-5 py-2 text-sm text-white bg-[#e50914]"
            onClick={() => setSignIn(true)}
          >
            Sign In
          </button>
        </div>
        <div className="loginscreen_Gradient" />
      </div>
      <div className="loginScreen_Body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginScreen_input ">
              <form className="loginScreen_content">
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen_getStarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
