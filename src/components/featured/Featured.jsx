import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {
  MoreVert,
  KeyboardArrowDown,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";

import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Суммарный доход</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Суммарный объем продаж за сегодня</p>
        <p className="amount">$444</p>
        <p className="desc">
          Обработка предыдущих транзакций. Последние платежи могут не
          включаться.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Цель</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Последняя неделя</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Последний месяц</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
