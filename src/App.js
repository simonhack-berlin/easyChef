import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Searched from "./pages/Searched";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
