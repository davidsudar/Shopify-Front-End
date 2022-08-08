import GenericProductsPage from "../components/GenericProductsPage";
// import ProductList from "../components/ProductList";

// import Hero from "../components/Hero";
import Promo from "../components/home/Promo";
import Testimonials from "../components/home/Testimonials";
// import Products from "./components/shopify/Products";

const Home = () => (
  <div >
    <Promo/>
    <GenericProductsPage />
    <Testimonials/>
  </div>
);

export default Home;
