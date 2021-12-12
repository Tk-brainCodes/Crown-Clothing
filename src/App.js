import './App.css';
import Homepage from '../src/Pages/Homepage/Homepage.component';
import Shop from './Pages/Shop/shop.component';
import { Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/Shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
