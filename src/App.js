import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Notfound from './components/Notfound/Notfound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap';
import Detail from './components/Detail/Detail';

function App() {
  return (
<div>
<Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/service">
          <Detail></Detail>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="*">
          <Notfound></Notfound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
</div>



  );
}

export default App;
