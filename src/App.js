import FaqsPage from "./components/FaqsPage";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";
import {Switch, Route,useHistory,useLocation,useParams} from 'react-router-dom'
import TicketPage from "./pages/TicketPage";
import Checkout from "./components/Checkout";

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
     <Route exact path="/faqs">
     <FaqsPage />
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
