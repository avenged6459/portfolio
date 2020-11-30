import Menu from './component/Menu';
import Accueil from './component/Accueil';
import About from './component/About';
import Tarifs from "./component/Tarifs";
import Competences from "./component/Competences";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Menu />
     <Accueil />
     <About />
    <Competences /> 
    <Tarifs /> 
   <Contact />
   <Footer /> 
    </div>
  );
}

export default App;
