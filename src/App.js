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

function App() {
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

    
     <Route exact path="/dashboard">
     <Dasboard />
     </Route>
     <Route exact path="/create-ticket">
      <h1>this is create tickets page  </h1>
     </Route>
     <Route exact path="/my-tickets">
      <h1>this is my tickets page  </h1>
     </Route>
     <Route  path="/marketplace/:ticketId">
      <TicketPage />
     </Route>
      </Switch>
    </div>
  );
}

export default App;
