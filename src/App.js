import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Coins from './components/Coins';
import CoinDetails from './components/CoinDetails';
import Exchanges from './components/Exchanges.jsx';

function App() {
  return (
    <div className="App">
      <Router>

          <Header />

              <Routes>

                <Route path='/' element = {< Home />}/>
                <Route path='/coins' element = {<Coins />}/>
                <Route path='/exchanges' element = {< Exchanges />}/>
                <Route path='/coin/:id' element = {<CoinDetails />}/>

              </Routes>
          </Router>
    </div>
  );
}

export default App;
