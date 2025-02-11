import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './App.css';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'

function App() {
  
  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']


  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>

          {/* <div className="navBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/packages">Our Packages</Link>
              </li>
            </ul>
          </div> */}
          <Container>
            <Nav
              fill
              defaultActiveKey="/"
              variant="tabs"
              style={{
                background: 'rgb(178, 190, 181,0.5)',
                color: 'gray',
                textDecoration: 'none',
                borderRadius: '10px'

              }}
            >
              <Nav.Item>
                <Nav.Link href="/">
                <Link to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"about"}>
                  <Link to="/about">About Us</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"packages"}>
                  <Link to="/packages">Our Packages</Link>
                </Nav.Link>
              </Nav.Item>
              </Nav>
          </Container>
        </header>

        <div className="display">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/packages" render={() => <Packages packages={packages}/>}  />
        </div>

      </Router>

    </div>
  );
}

export default App;





