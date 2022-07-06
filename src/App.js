import logo from './images/f1_logo_red.svg';
import './App.css';
import {Provider} from 'react-redux';
import Navbar from './components/navbar/navbar';
import Todo from './components/todo/todo';
import ViewplayerProfile from './components/viewplayerProfile';
import { store } from './state/store';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch, Link   } from 'react-router-dom';
import PlayerList from "./components/playerList/playerList";


function App() {
  return (
    
    <Router>
      <Provider store={store}>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/player" component={PlayerList} />
          </Switch>
      </Provider>
    </Router>
  );
}

export default App;
