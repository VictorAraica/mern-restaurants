import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Restaurant from "./pages/restaurant/Restaurant";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/restaurant/:id" component={Restaurant}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
