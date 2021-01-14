import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import InteractiveMap from './components/interactive-map/InteractiveMap';
import LogoSVG from './components/logo-svg/LogoSVG';
import Accordion_info_price from './components/accordion/Accordion_info_price';

function App() {
  return (
    <div className="App">
      <a href="https://comparateuragricole.com/" target="blank"><LogoSVG /></a>
      {/* <InteractiveMap /> */}
      < Accordion_info_price />
    </div>
  );
}

export default App;
