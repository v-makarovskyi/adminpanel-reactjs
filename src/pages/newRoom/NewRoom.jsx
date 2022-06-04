import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { roomInputs } from "../../formSource/roomInputs";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import "./newroom.scss";

const NewRoom = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState("");
  const [rooms, setRooms] = useState([]);

  const { user } = useContext(AuthContext);

  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
   
    try {
       const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
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
          Authorization: `Bearer ${user.token}`,
        },
      };

      const newRoom = {
        ...info,
        roomNumbers,
        photos: list,
      };

      await axios.post(
        `http://localhost:8800/api/rooms/${hotelId}`,
        newRoom,
        config
      );
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
          <h1>Добавить номер</h1>
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
              {roomInputs.map((input) => (
                <div className="formInput" key={input.key}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    id={input.id}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Номера</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="Введите, через запятую, номера"
                />
                 
              </div>
              <div className="formInput">
                 <label>Выбрать отель</label>
                <select
                  id="hotelId"
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  {loading
                    ? "Идет загрузка данных..."
                    : data &&
                      data.map((hotel) => (
                        <option value={hotel._id} key={hotel._id}>
                          {hotel.name}
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

export default NewRoom;
