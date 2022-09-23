import HomePage from "./HomePage";
import RestaurantPage from "./RestaurantPage";
import RestaurantSearch from "./RestaurantSearch";
import { BrowserRouter, Route, Routes} from "react-router-dom";

function RestaurantApp() {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage />}></Route> 
            <Route path="/SearchPage" element={<RestaurantSearch />}></Route> 
            <Route exact path="/Restaurants/:id" element={<RestaurantPage />}></Route> 
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default RestaurantApp;