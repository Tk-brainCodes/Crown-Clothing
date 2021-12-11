import './App.css';
import Homepage from '../src/Pages/Homepage/Homepage.component';
import { Switch, Route} from 'react-router-dom'


const HatPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
