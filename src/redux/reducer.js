
const dataJSON = require("../Data/Restaurants.json");
// console.log(dataJSON.restaurants);
function Reducer(
  state = { restaurants: dataJSON.restaurants, filterRestaurants : [] },
  action
) {
  switch (action.type) {
    case "ON_ADDRESS_SELECT":
      // console.log(action.payload);
      let value = toFilterAddress(action.payload, state.restaurants);
      return { ...state, filterRestaurants : value};
    //   {filterState : toFilterAddress(action.payload, state.restaurants)};
      // case "RESTAURANT_DATA":
      //     console.log(action.payload);
      //     return action.payload;
      // case "EACH_RESTAURANT":
      //     console.log(action.payload);
    default:
      return state;
  }
}

export default Reducer;

function toFilterAddress(data, state) {
  let searchedRestaurant = [];
  searchedRestaurant.push(data[0]);
  let RestaurantsInRange = [];
  RestaurantsInRange = data !== undefined || undefined
      ? state.filter((restaurant) => data[0].id !== restaurant.id&& (getDistance(data[0].latlng.lat, data[0].latlng.lng, restaurant.latlng.lat, restaurant.latlng.lng) <=5)
        )
      : null;
      // searchedRestaurant.push(RestaurantsInRange);
    //   let filterData = otherAddress.push(data);
    //   filterData.push(...data);
    //   filterData.push({...otherAddress});
      // console.log(searchedRestaurant.concat(RestaurantsInRange));
      return searchedRestaurant.concat(RestaurantsInRange);
//   console.log(otherAddress);
  // return id
}

function getDistance(lat1, lon1, lat2, lon2) {
  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;
    return dist / 2;
  }
}
