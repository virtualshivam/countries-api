import "./sass/main.css";
import Navbar from "./components/Navbar";
import SearchAndCardsSection from "./components/SearchAndCardsSection";
import Country from "./components/Country";

import { Route, Switch, MemoryRouter } from "react-router-dom";
const App = () => {
  return (
    <>
      
      <MemoryRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={SearchAndCardsSection} />
          <Route exact path="/country/:id" component={Country} />
        </Switch>
      </MemoryRouter>
    </>
  );
};

export default App;
