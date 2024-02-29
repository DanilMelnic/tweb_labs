import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Меню с вкладками */}
      <nav className="App-nav">
        <a className="App-button" href="#home">Главная</a>
        <a className="App-button" href="#about">О нас</a>
        <a className="App-button" href="#contact">Контакты</a>
      </nav>
      {/* Содержимое вкладок */}
      <main className="App-content">
        <section id="home">
          <h1>Добро пожаловать на главную страницу</h1>
          <p>Здесь может быть ваше вступительное сообщение.</p>
        </section>
        <section id="about">
          <h1>О нас</h1>
          <p>Информация о вашей компании или проекте.</p>
        </section>
      </main>
    </div>
  );
}

export default App;