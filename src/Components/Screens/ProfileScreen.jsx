import React from "react";
import { Nav } from "../Nav";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { PlansScreen } from "./PlansScreen";

export const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen pt-[70px] ">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />
          <div className="profileScreen_details  ">
            <h2 className="">{user.email}</h2>
            <div className="profileScreen_plans ">
              <h3>Plans</h3>
                <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
