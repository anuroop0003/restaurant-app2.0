import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import NavBar from "./navBar";


function RestaurantReviews({restaurants}) {
  const {reviews} = restaurants[0] || {};
  console.log(reviews);
  return (
    <>
    <NavBar />
        <Card id="listcard-container-reviews">
      { reviews !== undefined&& reviews.map((restaurant, i) => (
          <div key={i} id="listcard-items-reviews" style={{backgroundColor:"#DBE2EF"}}>
            <CardContent id="listcard-cardcontent-reviews">
              <Typography
                id="listcard-name"
                gutterBottom
                variant="h3"
                component="div"
              >
                {restaurant.name}
              </Typography>
              <Typography
                id="listcard-comments"
                gutterBottom
                variant="p"
                component="div"
              >
                {restaurant.comments}
              </Typography>
              <Typography
                id="listcard-date"
                gutterBottom
                variant="h6"
                component="div"
              >
                {restaurant.date}
              </Typography>
            </CardContent>
          </div>
      ))}
        </Card>
    </>
  );
}

export default RestaurantReviews;
