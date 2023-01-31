import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <>
      <Header />
      <Router>
        <App />
      </Router>
    </>
  );
};

export default AppWrapper;
