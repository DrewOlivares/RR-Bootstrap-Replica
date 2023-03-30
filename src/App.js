import './App.css';
import Background from './components/Background';
import NavBar from './components/NavBar';
import StoreListings from './components/StoreListings';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
