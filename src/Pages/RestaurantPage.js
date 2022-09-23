import RestaurantDetails from "../Components/restaurantDetails";
import RestaurantReviews from "../Components/restaurantReviews";
import RestaurantTimings from "../Components/restaurantTimings";
import "./restaurantpage.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function RestaurantPage() {
  const { id } = useParams();
  const allRestaurants = useSelector((state) => state.restaurants);
  const restaurants = allRestaurants.restaurants
  // console.log(restaurants);
  // console.log(id);
  const selectedRestaurant = restaurants.filter((restaurant) => restaurant.id === Number.parseInt(id, 10));
  // console.log(selectedRestaurant);
  return (
    // <Link
    //   style={{ textDecoration: "none", color: "black" }}
    //   to="/Restaurants/:id"
    // >
      <>
        <RestaurantDetails restaurants={selectedRestaurant}/>
        <RestaurantTimings restaurants={selectedRestaurant}/>
        <RestaurantReviews restaurants={selectedRestaurant}/>
      </>
    // </Link>
  );
}

export default RestaurantPage;
