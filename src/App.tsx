import { Router, Route } from "@solidjs/router";
// import Home from "./routes/Home";
import "./App.css";
import Menu from "./components/Menu";
import AdminPanel from "./routes/AdminPanel";
import Login from "./routes/Login";
import Order from "./routes/Order";
import Header from "./components/Header";
import { AppProvider } from "./appContext";

function App() {
  return (
    <>
      <AppProvider>
        <Header />

        <Router>
          <Route path={"/"} component={AdminPanel} />
          <Route path={"/login"} component={Login} />
          <Route path={"/order"} component={Order} />
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
