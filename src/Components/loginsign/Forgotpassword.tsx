import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import backgroundImage from '../loginsign/fon.jpg';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Request password reset for email: ${email}`);
    // Здесь можно добавить логику отправки запроса на сброс пароля с использованием введенного email
    setEmail(''); // После отправки запроса можно очистить поле ввода email
  };

  return (
    <div className="forgot-password-form" style={styles.container}>
      <Form onSubmit={handleSubmit} style={styles.form}>
        <Form.Group controlId="formBasicEmail" style={styles.formGroup}>
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
          <Form.Text className="text-muted">
            Ссылка на сброс пароля отправлено на почту.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" style={styles.button}>
          Отправить
        </Button>
      </Form>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    minHeight: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: '20px',
    color: 'white',
  },
  form: {
    backgroundColor: 'rgba(208,199,199,0.8)', // делает форму полупрозрачной, чтобы текст был виден
    padding: '50px',
    borderRadius: '100px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  formGroup: {
    marginBottom: '20px',
  },
  input: {
    border: '10px solid #ced4da',
    borderRadius: '4px',
    padding: '10px',
    width: '100%',
  },
  button: {
    width: '100%',
  },
};

export default ForgotPassword;
