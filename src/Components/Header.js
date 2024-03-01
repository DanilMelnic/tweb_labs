import React, { Component } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from './logo2.png';
import Paper from '@mui/material/Paper';

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
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
                            <Nav.Link href="/" style={{color: 'white'}}>Главная страница</Nav.Link>
                            <Nav.Link href="/abon" style={{color: 'white'}}>Абонементы</Nav.Link>
                            <Nav.Link href="pitanie" style={{color: 'white'}}>Питание</Nav.Link>
                            <Nav.Link href="time" style={{color: 'white'}}>Расписание тренировок</Nav.Link>
                            <Nav.Link href="blog" style={{color: 'white'}}>Блог</Nav.Link>
                            <Nav.Link href="feedback" style={{color: 'white'}}>Отзывы</Nav.Link>
                            <Nav.Link href="contacts" style={{color: 'white'}}>Контакты</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
