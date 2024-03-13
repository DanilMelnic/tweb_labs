import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import News from "../Pages/Informanionnavbar/News";
import '../Pages/Informanionnavbar/info.css';

function FillExample() {
  return (
    <div>
      <Nav fill variant="tabs"  defaultActiveKey="/home">
        <Nav.Item>
          <Link to="/facts" className="nav-link">Интересные факты</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/what" className="nav-link">А что если?</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/records" className="nav-link">Рекорды</Link>
        </Nav.Item>
      </Nav>
      <News/>
    </div>
  );
}

export default FillExample;
