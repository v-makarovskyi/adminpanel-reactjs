import React from "react";
import {
  KeyboardArrowUp,
  PersonOutlined,
  AccountBalanceWalletOutlined,
  ShoppingCartOutlined,
  MonetizationOn,
} from "@mui/icons-material";

import "./widjet.scss";

const Widjet = ({ type }) => {
  let data;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "Смотреть всех пользователей",
        icon: (
          <PersonOutlined
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "Смотреть все заказы",
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "Чистая прибыль",
        icon: (
          <MonetizationOn
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "Смотреть детали",
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widjet">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && " $"} {/* {amount} */}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="persentage positive">
          <KeyboardArrowUp />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widjet;
