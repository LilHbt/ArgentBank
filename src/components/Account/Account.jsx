import React from "react";
import "./Account.scss";
import Button from "../button/Button";

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
      <Button className="account-cta" type="#" text="View transactions" />
    </div>
  );
};

export default Account;
