import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./pages/NavigationBar";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <NavigationBar
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
