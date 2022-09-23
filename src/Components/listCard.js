import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useNavigate} from "react-router-dom";

export default function ListCard({restaurants}) {
  // console.log(restaurants);
  const navigate = useNavigate();
  return (
    <>
    {restaurants.map((restaurant, i) => (
        <Card key={i} id="listcard-container">
        <CardActionArea 
        onClick={() => navigate(`/restaurants/${restaurant.id}`)}
        id="listcard-items" sx={{backgroundColor:"#00ADB5"}}>
        <CardMedia
        id="listcard-img"
          component="img"
          image={`./images/${restaurant.photograph}`}
          alt=""
        />
        <CardContent id="listcard-cardcontent">
          <Typography  id="listcard-title" gutterBottom variant="h5" component="div">
            {restaurant.name}
          </Typography>
          <Typography  id="listcard-address" gutterBottom variant="h5" component="div">
          {restaurant.address}
          </Typography>
          <Typography  id="listcard-cuisine" gutterBottom variant="h5" component="div">
          {restaurant.cuisine_type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      ))}
    </>
  );
}
