import { Router, Route } from "@solidjs/router";
// import Home from "./routes/Home";
import "./App.css";
import Menu from "./components/Menu";
import AdminPanel from "./routes/AdminPanel";
import Login from "./routes/Login";
import Order from "./routes/Order";

function App() {
  return (
    <>
      <Router>
        <Route path={"/"} component={AdminPanel} />
        <Route path={"/menu"} component={Menu} />
        <Route path={"/login"} component={Login} />
        <Route path={"/order"} component={Order} />
      </Router>
    </>
  );
}

export default App;
