import React, { useContext } from "react";
import {
  Dashboard,
  PersonOutline,
  LocalShipping,
  CreditCard,
  Store,
  InsertChart,
  SettingsApplications,
  ExitToApp,
  NotificationsNone,
  SettingsSystemDaydreamOutlined,
  PsychologyOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { DarkModeContext } from "../../context/darkModeContext";
import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">VM Administrator</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Главное</p>
          <li>
            <Dashboard className="icon" />
            <span>Панель управления</span>
          </li>
          <p className="title">Списки</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutline className="icon" />
              <span>Пользователи</span>
            </li>
          </Link>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <Store className="icon" />
              <span>Отели</span>
            </li>
          </Link>
          <Link to='/rooms' style={{ textDecoration: "none" }}>
          <li>
            <CreditCard className="icon" />
            <span>Номера</span>
          </li>
          </Link>
          
          <li>
            <LocalShipping className="icon" />
            <span>Доставка</span>
          </li>
          <p className="title">Полезное</p>
          <li>
            <InsertChart className="icon" />
            <span>Статистика</span>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <span>Уведомления</span>
          </li>
          <p className="title">Сервисы</p>
          <li>
            <SettingsSystemDaydreamOutlined className="icon" />
            <span>Cистема</span>
          </li>

          <li>
            <PsychologyOutlined className="icon" />
            <span>Журналы</span>
          </li>
          <li>
            <SettingsApplications className="icon" />
            <span>Настройки</span>
          </li>
          <p className="title">Пользователь</p>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>Профиль</span>
          </li>
          <li>
            <ExitToApp className="icon" />
            <span>Выйти</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
