import { Title } from "@mui/icons-material";

export const userColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "user",
    headerName: "USER",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWidthImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "EMAIL",
    width: 230,
  },
  {
    field: "country",
    headerName: "COUNTRY",
    width: 100,
  },
  {
    field: "city",
    headerName: "CITY",
    width: 100,
  },
  {
    field: "phone",
    headerName: "PHONE",
    width: 150,
  },
];

export const hotelColumns = [
  {field: '_id', headerName: 'ID', width: 250},
  {field: 'name', headerName: 'NAME', width: 250},
  {field: 'type', headerName: 'TYPE', width: 250},
  {field: 'city', headerName: 'CITY', width: 250},
]

export const roomColumns = [
  {field: '_id', headerName: 'ID', width: 250},
  {field: 'title', headerName: 'Title', width: 250},
  {field: 'desc', headerName: 'Description', width: 350},
  {field: 'price', headerName: 'Price', width: 100},
  {field: 'maxPeople', headerName: 'Max People', width:  100}
]