import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import NavBar from "./navBar";


function RestaurantDetails({restaurants}) {
  const {photograph, name, address, cuisine_type} = restaurants[0] || {};
  // console.log(photograph);
  return (
    <>
    <NavBar />
        <Card id="listcard-container">
          <div id="listcard-items" style={{backgroundColor:"#DBE2EF"}}>
            <CardMedia
              id="listcard-img"
              component="img"
              image={`../images/${photograph}`}
              alt=""
            />
            <CardContent id="listcard-cardcontent">
              <Typography
                id="listcard-title"
                gutterBottom
                variant="h5"
                component="div"
              >
                {name}
              </Typography>
              <Typography
                id="listcard-address"
                gutterBottom
                variant="h5"
                component="div"
              >
                {address}
              </Typography>
              <Typography
                id="listcard-cuisine"
                gutterBottom
                variant="h5"
                component="div"
              >
                {cuisine_type}
              </Typography>
            </CardContent>
          </div>
        </Card>
    </>
  );
}

export default RestaurantDetails;
