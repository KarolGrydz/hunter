import './App.css';

import { Navbar } from './components/layout/Navbar';
import { Home } from './components/pages/Home';
import { Footer } from './components/layout/Footer';

import { TripsState } from './context/trips/TripsState';

function App() {
  return (
    <TripsState>
      <Navbar />
      <h1>Hunter app</h1>
      <h3>nowa apka</h3>
      <Home />
      <Footer />
    </TripsState>
  );
}

export default App;
