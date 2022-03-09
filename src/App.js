import Home from "./Pages/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BlackJack from "./Pages/Blackjack";
import Tii from "./Pages/Tii";
import PropositionVisualizer from "./Pages/Discrete_Mathematics/PropositionVisualizer";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/black-jack" element={<BlackJack/>}/>
      <Route exact path="/the-internship-initiative" element={<Tii/>}/>
      <Route exact path="/MATH190/proposition-visualizer" element={<PropositionVisualizer/>}/>
      <Route exact path="*" element={<Home/>}/>
      </Routes>

    </Router>
  );
}

export default App;
