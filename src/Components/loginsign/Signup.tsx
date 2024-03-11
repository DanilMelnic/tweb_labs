import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import backgroundImage from '../loginsign/logo5.jpg'; // Путь к изображению фона



interface Props {
  backgroundColor: string;
}

function GridComplexExample({ backgroundColor = "grey" }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'country':
        setCountry(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      case 'username':
        setUsername(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Простая валидация: проверяем, что все обязательные поля заполнены
    if (!email || !password || !country || !city || !phoneNumber || !username) {
      alert('Please fill in all required fields.');
      return;
    }
    if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(password)) {
      alert('Password must contain at least one letter and one number.');
      return;
    }

    // Здесь можно добавить логику отправки данных на сервер или выполнения других действий
    console.log('Form submitted!');
  };

  return (
      <div>
        <div style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Form style={{
                  backgroundColor: backgroundColor,
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" name="email" placeholder="Enter email" value={email}
                                    onChange={handleInputChange} required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" name="password" placeholder="Password" value={password}
                                    onChange={handleInputChange} required/>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCountry">
                      <Form.Label>Country</Form.Label>
                      <Form.Control type="text" name="country" placeholder="Enter country" value={country}
                                    onChange={handleInputChange} required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" name="city" placeholder="Enter city" value={city}
                                    onChange={handleInputChange} required/>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" name="phoneNumber" placeholder="Enter phone number" value={phoneNumber}
                                    onChange={handleInputChange} required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" name="username" placeholder="Enter username" value={username}
                                    onChange={handleInputChange} required/>
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}/>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default GridComplexExample;
