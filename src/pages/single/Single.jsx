import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editBtn">Редактировать</div>
            <h1 className="title">Информация</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h2 className="itemTitle">Ольга Сизова</h2>
                <div className="details-item">
                  <span className="itemKey">Email:: </span>
                  <span className="itemValue">olgasizova@test.ua</span>
                </div>
                <div className="details-item">
                  <span className="itemKey">Телефон: </span>
                  <span className="itemValue">+38 067 444 33 99</span>
                </div>
                <div className="details-item">
                  <span className="itemKey">Адрес: </span>
                  <span className="itemValue">ул. Костельная, 34 г. Киев</span>
                </div>
                <div className="details-item">
                  <span className="itemKey">Страна: </span>
                  <span className="itemValue">Украина</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 1}
              title="Расходы пользоватедей (последние 6 мес)"
            />
          </div>
        </div>
        <div className="bottom">
          <h2 className="title">Завершенные транзакции</h2>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
