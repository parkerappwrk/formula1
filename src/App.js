import './App.css';
import {Provider} from 'react-redux';
import { store } from './state/store';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
