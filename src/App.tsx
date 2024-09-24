import { Router, Route } from "@solidjs/router";
// import Home from "./routes/Home";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Order from "./routes/Order";
import Header from "./components/Header";
import { AppProvider } from "./appContext";
import AdminPanel from "./routes/AdminPanel";

function App() {
  return (
    <>
      <AppProvider>
        <Header />

        <Router>
          <Route path={"/"} component={Home} />
          <Route path={"/adminPanel"} component={AdminPanel} />
          <Route path={"/login"} component={Login} />
          <Route path={"/order"} component={Order} />
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
