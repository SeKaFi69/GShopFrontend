import { Router, Route } from "@solidjs/router";
// import Home from "./routes/Home";
import "./App.css";
import Menu from "./components/Menu";
import AdminPanel from "./routes/AdminPanel";

function App() {
  return (
    <Router>
      <Route path={"/"} component={AdminPanel} />
      <Route path={"/menu"} component={Menu} />
    </Router>
  );
}

export default App;
