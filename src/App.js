import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Searched from "./pages/Searched";
import Vegan from "./pages/Vegan";
import Vegetarian from "./pages/Vegetarian";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vegan" element={<Vegan />} />
      <Route path="/vegetarian" element={<Vegetarian />} />
      <Route path="/details/:id" element={<RecipeDetails />} />
      <Route path="/searched/:search" element={<Searched />} />
    </Routes>
  );
};

const AppWrapper = () => {
  return (
    <>
      <Router>
        <App />
      </Router>
    </>
  );
};

export default AppWrapper;
