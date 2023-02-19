import { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false)
      }
      }
    window.addEventListener("scroll", onScroll)
      return () => window.removeEventListener("scrolled", onScroll)
  }, [])

    const updateActiveLink = (value) => {
      setActiveLink(value)
    }  

    return (
      <Router>
          <Navbar className={scrolled? "scrolled": ""} justify variant="tabs" defaultActiveKey="/home">
            <Container>
              
              <Navbar.Brand href="/">
                <img src='{logo}' alt="Logo" />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>

              <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav classname='ms-auto'>  
                  <Nav.Link 
                    href="#home" 
                    className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}
                    >Home
                  </Nav.Link>

                  <Nav.Link 
                    href='#skills'
                    classname={activeLink=== 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('')}
                    >Portfolio
                  </Nav.Link>

                  <Nav.Link 
                      href='#about'
                      classname={activeLink=== 'about' ? 'active-navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('')}
                      >About Me
                  </Nav.Link>

                  <Nav.Link 
                      classname={activeLink=== 'contact' ? 'active-navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('')}
                      href='#contact'>Contact Me
                  </Nav.Link>
                  <span className='navbar-text'>
                    <div className='social-icons'>
                      <Nav.Link href="#"><img src='' alt='' /></Nav.Link>
                      <Nav.Link href="#"><img src='' alt='' /></Nav.Link>
                      <Nav.Link href="#"><img src='' alt='' /></Nav.Link>
                    </div>
                    <HashLink to='#connect'>
                      <button className="vvd">
                        <span>Let’s Connect</span>
                      </button>
                    </HashLink> 
                  </span>
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </Router>
    );

};