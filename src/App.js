import './Navbar.css';
import './Home.css'
import Navbar from './Navbar';
import Home from './Home';
import PricingPlans from './PricingPlans';

function App() {
  const title = 'Welcome to Honors Pro!';
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <PricingPlans />
      </div>

    </div>
  );
}

export default App;
