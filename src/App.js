import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Booking from "./Pages/Booking/Booking";
import Home from "./Pages/Home/Home/Home";
import NOtFount from "./Pages/NotFount/NOtFount";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/booking/:serviceId">
            <Booking></Booking>
          </Route>
          <Route path="*">
            <NOtFount></NOtFount>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
