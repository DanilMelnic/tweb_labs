import React, { Component } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../img/logo2.png';
import Paper from '@mui/material/Paper';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import Abonament from '../Pages/Abonement';
import Pitanie from '../Pages//Pitanie';
import Time from '../Pages//Time';
import Blog from '../Pages//Blog';
import Feedback from '../Pages//Feedback';
import Contacts from '../Pages//Contacts';

class Header extends Component {
    render() {
        return (
            <Router>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            {/* Используем компонент Link из react-router-dom для ссылки */}
                            <img
                                src={logo}
                                height="60"
                                width="60"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                {/* Заменяем href на to внутри компонентов Link */}
                                <Nav.Link as={Link} to="/" style={{color: 'white'}}>Главная страница</Nav.Link>
                                <Nav.Link as={Link} to="/abon" style={{color: 'white'}}>Абонементы</Nav.Link>
                                <Nav.Link as={Link} to="/pitanie" style={{color: 'white'}}>Питание</Nav.Link>
                                <Nav.Link as={Link} to="/time" style={{color: 'white'}}>Расписание тренировок</Nav.Link>
                                <Nav.Link as={Link} to="/blog" style={{color: 'white'}}>Блог</Nav.Link>
                                <Nav.Link as={Link} to="/feedback" style={{color: 'white'}}>Отзывы</Nav.Link>
                                <Nav.Link as={Link} to="/contacts" style={{color: 'white'}}>Контакты</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                     <Route exact path="/abon" element={<Abonament/>}/>
                    <Route exact path="/pitanie" element={<Pitanie/>}/>
                    <Route exact path="/time" element={<Time/>}/>
                    <Route exact path="/blog" element={<Blog/>}/>
                    <Route exact path="/feedback" element={<Feedback/>}/>
                    <Route exact path="/contacts" element={<Contacts/>}/>
                </Routes>
            </Router>
        );
    }
}

export default Header;

