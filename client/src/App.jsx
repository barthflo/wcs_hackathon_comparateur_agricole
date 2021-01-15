import './App.css';
// import AdminList from './components/admin/AdminList';
import 'bootstrap/dist/css/bootstrap.css';
import InteractiveMap from './components/interactive-map/InteractiveMap';
import LogoSVG from './components/logo-svg/LogoSVG';
import ChatContainer from './components/chat/ChatContainer';
import AccordionContainer from './components/accordion/AccordionContainer';
import Accordion_info_price  from './components/accordion/Accordion_info_price';

function App() {
  return (
    <div className="App">
      <a href="https://comparateuragricole.com/" target="blank"><LogoSVG /></a>
      <ChatContainer className={"border-green"}/>
      <AccordionContainer className={"border-warning"}/>
      <InteractiveMap />
    </div>
  );
}

export default App;
