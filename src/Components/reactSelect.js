import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

function ReactSelect() {
  const dispatch = useDispatch();
  const allRestaurants = useSelector((state) => state.restaurants);
  const restaurants = allRestaurants.restaurants;
  const restaurantAddress = restaurants.map((restaurant) => restaurant.address);
  const [select, setSelect] = useState(null);
    var options = [];
    restaurantAddress.map((element) =>
      options.push({ value: element, label: element })
    );
    useEffect(() => {
    let selectedAddress = select !== null ? restaurants.filter((restaurant) => select.value === restaurant.address) : null;
    selectedAddress !== null && dispatch({ type: "ON_ADDRESS_SELECT", payload: selectedAddress });
  }, [select]);
  return (
    <Select
      onChange={(e) => setSelect(e)}
      id="react-select"
      options={options}
    />
  );
}

export default ReactSelect;
