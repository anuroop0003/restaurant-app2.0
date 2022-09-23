import ListCard from "../Components/listCard";
import NavBar from "../Components/navBar";
import ReactSelect from "../Components/reactSelect";
import "./homepage.css";
import { useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import {useNavigate} from "react-router-dom";

function HomePage() {
  const allRestaurants = useSelector((state) => state.restaurants);
//   const restaurants1 = useSelector((state) => state.restaurants.filterRestaurants);
  const restaurants = allRestaurants.restaurants;
  const navigate = useNavigate();
//   console.log(restaurants1);
  return (
    <>
      <NavBar />
      <Typography
        component="div"
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <ReactSelect />
        <Button sx={{ marginRight: "20px" }} variant="outlined"
        onClick={() => navigate("/SearchPage")}
        >
          Search
        </Button>
      </Typography>
      <ListCard restaurants={restaurants} />
    </>
  );
}

export default HomePage;
