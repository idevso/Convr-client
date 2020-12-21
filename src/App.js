import Authentication from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import Chat from "./components/chat/chat";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(props){
  return (
    <Router>
    <Switch>
      <Route exact path="/">
          <Dashboard />
      </Route>

      <Route path="/login">
          <Authentication />
      </Route>

      <Route path="/chat/:chatroom">
          <Chat />
      </Route>
    </Switch>
  </Router>
  )
}


// function App(props) {

//   if (props.state.user.id){
//       if (!props.state.groups.active){
//         return <Dashboard />
//       }

//       return <Chat/>
//     } 

//     return <Authentication />
    
// }

function mapState(state){  
  return {
    state
  }
}



export default connect(mapState)(App);
