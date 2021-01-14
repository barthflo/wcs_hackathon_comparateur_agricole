import './App.css';
// import AdminList from './components/admin/AdminList';
import 'bootstrap/dist/css/bootstrap.css';
import InteractiveMap from './components/interactive-map/InteractiveMap';
import LogoSVG from './components/logo-svg/LogoSVG';

function App() {
  return (
    <div className="App">
      <a href="https://comparateuragricole.com/" target="blank"><LogoSVG /></a>
      <InteractiveMap />
    </div>
  );
}

export default App;
