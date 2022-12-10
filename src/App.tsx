import Projects from 'Pages/Projects/Projects';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Container from "./Layout/Container";
import Footer from './Layout/Footer/Footer';
import NavBar from './Layout/NavBar/NavBar';
import Company from './Pages/Company/Company';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import NewProject from './Pages/NewProject/NewProject';


function App() {
  return (
    <BrowserRouter>
          <NavBar/>
            <Container customClass='min_height'>
              <Routes>
                  <Route path='/'element={<Home/>}/>
                  <Route path='/projects'element={<Projects/>}/>
                  <Route path='/contact'element={<Contact/>}/>
                  <Route path='/company'element={<Company/>}/>
                  <Route path='/newproject'element={<NewProject/>}/>
              </Routes>
            </Container>
            
          <Footer/>
    </BrowserRouter>
  );
}

export default App;
