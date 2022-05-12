import logo from './logo.svg';
import './App.css';
import StockSaveComponent from "./components/StockDetailsComponent"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import StockValuationComponent from './components/StockValuationComponent';

function App() {
  return (
    <div className="App">          
        <Router>
              <div className="container">
                  <Switch> 
                        <Route path='/' exact component = {StockValuationComponent}></Route>         
                        <Route path='/SaveStock' component = {StockSaveComponent}></Route>                                                              
                    </Switch> 
              </div>
        </Router>
    </div>   
  );
}

export default App;
