import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Read from './components/Read';
import Create from './components/Create';


import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Read">Read</Nav.Link>
            <Nav.Link href="/Create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Content></Content>}> </Route>
        <Route path='/Read' element={<Read></Read>}> </Route>
        <Route path='/Create' element={<Create></Create>}> </Route>
      </Routes>

      
      {/*<Header></Header>
      <Content></Content>
      <Footer></Footer>*/}
      </BrowserRouter>
      </div>
  )
  
}

export default App
