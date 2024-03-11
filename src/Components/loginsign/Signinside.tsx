import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInSide = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
      navigate('/dashboard'); // Перенаправляем пользователя на страницу после входа
    }
  }, []);

  const handleLogin = () => {
    // Здесь должна быть логика проверки email и пароля
    // Здесь также можно использовать API для проверки входа

    // Предположим, что вход успешен
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Сохраняем состояние входа в хранилище браузера
    navigate('/dashboard'); // Перенаправляем пользователя на страницу после входа
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>Вы уже вошли в систему.</p>
      ) : (
        <div>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Войти</button>
        </div>
      )}
    </div>
  );
};

export default SignInSide;
