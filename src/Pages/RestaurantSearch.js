import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useSelector } from "react-redux";
import NavBar from "../Components/navBar";
import "./restaurantsearch.css";
import {useNavigate} from "react-router-dom";

function RestaurantSearch() {
  const restaurants = useSelector((state) => state.restaurants.filterRestaurants);
  // const restaurants = allRestaurants;
  // const {photograph, name, address, cuisine_type} = restaurants[0] || {};
  console.log(restaurants);
  const navigate = useNavigate();
  return (
    <><div>Hello</div>
    <NavBar />
    <Typography id="Search-title">Search Result</Typography>
      {restaurants.map((restaurant, i) => (
        <Card key={i} id="listcard-container" onClick={() => navigate(`/restaurants/${restaurant.id}`)}>
          <CardActionArea id="listcard-items" sx={{backgroundColor:"#DBE2EF"}}>
            <CardMedia
              id="listcard-img"
              component="img"
              image={`./images/${restaurant.photograph}`}
              alt=""
            />
            <CardContent id="listcard-cardcontent">
              <Typography
                id="listcard-title"
                gutterBottom
                variant="h5"
                component="div"
              >
                {restaurant.name}
              </Typography>
              <Typography
                id="listcard-address"
                gutterBottom
                variant="h5"
                component="div"
              >
                {restaurant.address}
              </Typography>
              <Typography
                id="listcard-cuisine"
                gutterBottom
                variant="h5"
                component="div"
              >
                {restaurant.cuisine_type}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}

export default RestaurantSearch;
