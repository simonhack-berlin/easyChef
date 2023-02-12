import { useEffect, useState } from "react";
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
  const [ theme, setTheme ] = useState('dark');
  const [ showRecipesTypes, setShowRecipesTypes ] = useState('Popular');

  useEffect(()=>{
		if (getTheme === 'dark') {
      cookies.set('theme', 'dark', { path: '/' });
      document.body.classList.add('dark');
    } else {
      cookies.set('theme', 'light', { path: '/' });
      document.body.classList.remove('dark');
    }
	}, [getTheme]);

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
