import "./styles/css/styles.css"
import Header from "./components/MunchHeader/Header";
import BrowsePlaces from "./components/BrowsePlaces/BrowsePlaces";
import HowToWork from "./components/HowToWork/HowToWork";
import NewRestaurant from "./components/NewRestaurant/NewRestaurant";
import OrderFood from "./components/OrderFood/OrderFood";
import OfferBanners from "./components/OfferBanners/OfferBanners";
import QuickSearch from "./components/QuickSearch/QuickSearch";
import FeaturedResturants from "./components/FeaturedResturants/FeaturedResturants";
import ExploreRecipes from "./components/ExploreRecipes/ExploreRecipes";

function App() {
  return (
    <div className="App">
        <div className="munch">
          <Header />
          <BrowsePlaces />
          <HowToWork />
          <NewRestaurant />
          <OrderFood />
          <OfferBanners />
          <QuickSearch />
          <FeaturedResturants />
          <ExploreRecipes />
        </div>
    </div>
  );
}

export default App;
