import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cookies from "universal-cookie";
import Home from "./Pages/Home";
import RecipeDetails from "./Pages/RecipeDetails";
import Searched from "./Pages/Searched";
import { RecipesContext } from "./Store/Recipes-context";
import { ThemeContext } from "./Store/Theme-context";

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
  const cookies = new Cookies();
  const getTheme = cookies.get('theme');
  const [ theme, setTheme ] = useState(getTheme);
  const [ showRecipesTypes, setShowRecipesTypes ] = useState('Popular');

  if (getTheme) {
    cookies.set('theme', theme, { path: '/' });
  } else {
    cookies.set('theme', 'light', { path: '/' });
  }
  
  return (
    <>
      <Router>
        <ThemeContext.Provider value={{theme, setTheme}}>
        <RecipesContext.Provider value={{showRecipesTypes, setShowRecipesTypes}}>
          <App />
        </RecipesContext.Provider> 
        </ThemeContext.Provider>
      </Router>
    </>
  );
};

export default AppWrapper;
