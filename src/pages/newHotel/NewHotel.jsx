import React, { useState, useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { hotelInputs } from "../../formSource/hotelInputs";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from '../../context/AuthContext'
import axios from "axios";

import "./newhotel.scss";

const NewHotel = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("http://localhost:8800/api/rooms");
  console.log(data)
  const { user } = useContext(AuthContext)
  
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/du1wjdi3j/image/upload",
            data
          );
          const { url } = uploadRes.data;
          return url;
        })
      );

        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }

      const newhotel = {
        ...info,
        rooms,
        photos: list,
      };
      await axios.post(`http://localhost:8800/api/hotels/`, newhotel, config);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Добавить новый продукт</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="#"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>
              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                <label htmlFor="featured">Рекомендуемые</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>нет</option>
                  <option value={true}>да</option>
                </select>
              </div>
              <div className="selectRoom">
                <label className="selectLabel">Номера</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading
                    ? "Загрузка данных..."
                    : data &&
                      data.map((room) => (
                        <option key={room.id} value={room.id}>
                          {room.title}
                        </option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Сохранить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
