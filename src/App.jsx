import Header from "./components/Header";
import BrowsePlaces from "./components/BrowsePlaces";
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
  );
}

export default App;
