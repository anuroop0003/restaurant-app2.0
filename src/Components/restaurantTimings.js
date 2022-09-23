import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import NavBar from "./navBar";


function RestaurantTimings({restaurants}) {
  console.log(restaurants);
  const {operating_hours} = restaurants[0] || {};
  let operatingHours = [];
  for (let key in operating_hours) {
    if (operating_hours.hasOwnProperty(key)) {
      let value = operating_hours[key];
      operatingHours.push({ key, value });
    }
  }
  console.log(operating_hours);
  return (
    <>
    <NavBar />
        <Card id="listcard-container" >
          <div id="listcard-items-timings" style={{backgroundColor:"#DBE2EF", height:"500px"}}>
            <CardContent id="listcard-cardcontent-timing" >
              <Typography
                id="listcard-title-timing"
                gutterBottom
                variant="h5"
                component="div"
              >
                Opertaing Hours
              </Typography>
              {operatingHours.map((hours, i) => (
              <Typography
              key={i}
                id="listcard-timing"
                gutterBottom
                variant="h3"
                component="div"
              >
                {`${hours.key}: ${hours.value}`}
              </Typography>
              ))}
            </CardContent>
          </div>
        </Card>
    </>
  );
}

export default RestaurantTimings;
