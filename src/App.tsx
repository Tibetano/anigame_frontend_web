import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Ticket from './components/pages/Ticket';
import Schedule from './components/pages/Schedule';
import Gallery from './components/pages/Gallery';
import Store from './components/pages/Store';
import About from './components/pages/About';

function App() {

  return (
    <>
        <Router>

          <Header />

            <Routes>
              <Route path='/' element={<Home />}/>

              <Route path='/ingresso' element={<Ticket />}/>
              <Route path='/programacao' element={<Schedule />}/>
              <Route path='/galeria' element={<Gallery />}/>
              <Route path='/loja' element={<Store />}/>
              <Route path='/sobre' element={<About />}/>

              <Route path='/contato' element={<Contact />}/>
            </Routes>

          <Footer />

        </Router>
    </>
  );
};

export default App;