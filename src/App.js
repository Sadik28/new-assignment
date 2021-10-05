import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import SingleServices from "./component/SingleService/SingleServices";
import Review from "./component/Review/Review";
import NotFound from "./component/NotFound/NotFound";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import About from "./component/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <SingleServices></SingleServices>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/notefound">
            <NotFound></NotFound>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
