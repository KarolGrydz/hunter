import './App.css';

import { Navbar } from './components/layout/Navbar';
import { Home } from './components/pages/Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <h1>Hunter app</h1>
      <h3>nowa apka</h3>
      <Home />
    </div>
  );
}

export default App;
