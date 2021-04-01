import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import UpperNav from './components/Navbar/UpperNav/UpperNav';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <UpperNav />      
      <Route path="/" component={Home} />
    </div>
    </BrowserRouter>
  );
}

export default App;
