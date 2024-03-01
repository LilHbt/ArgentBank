import React from "react";
import "./Account.scss";

const Account = (props) => {
  const { accountTitle } = props;
  const { accountAmount } = props;
  const { accountBalance } = props;
  return (
    <div className="container-account">
      <div className="account-wrapper">
        <h3>{accountTitle}</h3>
        <p>{accountAmount}</p>
        <p>{accountBalance}</p>
      </div>
      <button className="account-cta">View transactions</button>
    </div>
  );
};

export default Account;
