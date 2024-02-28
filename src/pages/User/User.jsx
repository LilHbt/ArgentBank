import React, { useState } from "react";
import Account from "../../components/Account/Account";
import "./User.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeUserName } from "../../redux/actions/userActions";

function User() {
  const { token, user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const [userName, setUserName] = useState("");
  const userNameChange = (e) => {
    e.preventDefault();
    let body = { userName };
    changeUserName(token, body, dispatch);
  };

  return (
    <div className="background">
      <h1 className="user-welcome">
        Welcome back {user.firstName} {user.lastName}!
      </h1>
      <button
        onClick={() => {
          setIsOpened(true);
        }}
      >
        Edit name
      </button>
      {isOpened ? (
        <form onSubmit={userNameChange}>
          <label htmlFor="username">New Username</label>
          <input
            autoComplete="on"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            name="username"
            id="username"
          ></input>
          <button
            async
            onClick={(e) => {
              setTimeout(() => {
                setIsOpened(false);
              }, 1000);
            }}
          >
            Submit
          </button>
        </form>
      ) : (
        <div></div>
      )}

      <div className="accounts">
        <Account
          accountTitle={"Argent Bank Checking (x8349)"}
          accountAmount={"$2,082.79"}
          accountBalance={"Available Balance"}
        />
        <Account
          accountTitle={"Argent Bank Savings (x6712)"}
          accountAmount={"$10,928.42"}
          accountBalance={"Available Balance"}
        />
        <Account
          accountTitle={"Argent Bank Credit Card (x8349)"}
          accountAmount={"$184.30"}
          accountBalance={"Current Balance"}
        />
      </div>
    </div>
  );
}

export default User;
