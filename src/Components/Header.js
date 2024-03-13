import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import logo from '../img/logo2.png';
import Home from '../Pages/Home';
import Abonament from '../Pages/Abonement';
import Pitanie from '../Pages/Pitanie';
import Time from '../Pages/Time';
import Blog from '../Pages/Blog';
import Feedback from '../Pages/Feedback';
import Contacts from '../Pages/Contacts';
import Login from './loginsign/Login'; // Import the Login component
import '../App.css';
import SignUp from '../Components/loginsign/Signup';
import Forgotpassword from "../Components/loginsign/Forgotpassword"
import SignInSide from "../Components/loginsign/Signinside"
import FillExample from "../Components/Information"
import Facts from "../Pages/Informanionnavbar/Facts";
import What from "../Pages/Informanionnavbar/what";
import Records from "../Pages/Informanionnavbar/Records";

class Header extends Component {
    render() {
        return (
            <Router>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img src={logo} height="60" width="60" className="d-inline-block align-top" alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
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
    <Route exact path="/" element={<Home />}/>
    <Route exact path="/abon" element={<Abonament />}/>
    <Route exact path="/pitanie" element={<Pitanie />}/>
    <Route exact path="/time" element={<Time />}/>
    <Route exact path="/blog" element={<Blog />}/>
    <Route exact path="/feedback" element={<Feedback />}/>
    <Route exact path="/contacts" element={<Contacts />}/>
    <Route exact path="/login" element={<Login />}/>
    <Route exact path="/signup" element={<SignUp />} /> {/* Добавляем новый маршрут */}
    <Route exact path="/forgot-password" element={<Forgotpassword />} />
                   <Route exact path="/facts" element={<Facts />} />
                   <Route exact path="/what" element={<What />} />
                   <Route exact path="/Records" element={<Records />} />
</Routes>

                {/* Метка и кнопка "Войти" */}
                <div style={{ position: 'absolute', top: 30, right: 10 }}>
                    <span style={{ color: 'white', marginRight: '5px' }}></span>
                    <Link to="/login" style={{ color: 'white', backgroundColor: 'blue', borderRadius: '30px', padding: '10px 25px' }}>Аккаунт</Link>
                </div>
            </Router>
        );
    }
}

export default Header;
