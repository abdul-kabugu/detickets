import FaqsPage from "./components/FaqsPage";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";
import {Switch, Route,useHistory,useLocation,useParams} from 'react-router-dom'
import TicketPage from "./pages/TicketPage";
import Checkout from "./components/Checkout";
import Dasboard from "./pages/Dasboard";
import MyEvents from "./components/MyEvents";
import MyCustomers from "./components/MyCustomers";
import MyOrders from "./components/MyOrders";
import CreateEvent from "./pages/CreateEvent";
import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import UserProfile from "./pages/UserProfile";
function App() {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);
  return (
    <div className="App">
    <Switch>
     <Route exact path="/">
     <Home /> 
     
     </Route>
    <Route exact path="/marketplace">
    <MarketPlace />
    </Route>
    <Route exact path="/myevents">
     <MyEvents />

    </Route>

    <Route exact path="/orders">
     <MyOrders />
    </Route>
    <Route exact path="/customers">
    <MyCustomers />
    </Route>

    <Route exact path="/create">
    <CreateEvent />
    </Route>

    
     <Route exact path="/dashboard">
     <Dasboard />
     </Route>
     <Route exact path="/create-ticket">
      <h1>this is create tickets page  </h1>
     </Route>
     <Route exact path="/user">
       <UserProfile />
     </Route>
     <Route  path="/marketplace/:ticketId">
      <TicketPage />
     </Route>
      </Switch>
    </div>
  );
}

export default App;
