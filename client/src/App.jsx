import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import InteractiveMap from './components/interactive-map/InteractiveMap';
import LogoSVG from './components/logo-svg/LogoSVG';
import ChatContainer from './components/chat/ChatContainer';

function App() {
  return (
    <div className="App">
      <a href="https://comparateuragricole.com/" target="blank"><LogoSVG /></a>
      <ChatContainer />
      <InteractiveMap />
    </div>
  );
}

export default App;
