import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Searched from "./pages/Searched";
import { RecipesContext } from "./store/Recipes-context";

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
  const [ showRecipesTypes, setShowRecipesTypes ] = useState('Popular');
  return (
    <>
      <Router>
        <RecipesContext.Provider value={{showRecipesTypes, setShowRecipesTypes}}>
          <App />
        </RecipesContext.Provider> 
      </Router>
    </>
  );
};

export default AppWrapper;
