import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cookies from "universal-cookie";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Searched from "./pages/Searched";
import { RecipesContext } from "./store/Recipes-context";
import { ThemeContext } from "./store/Theme-context";

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

  if (getTheme === undefined) {
    cookies.set('theme', 'light', { path: '/' });
  } else {
    cookies.set('theme', theme, { path: '/' });
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
