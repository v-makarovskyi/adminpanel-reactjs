import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widjet from "../../components/widjet/Widjet";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from '../../components/table/Table'

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widjet type="user" />
          <Widjet type="order" />
          <Widjet type="earning" />
          <Widjet type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Данные за последние 6 месяцев" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Последние транзакции</div>
            <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
