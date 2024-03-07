import React from 'react';
import zalImage from '../img/zal1.jpg'; // Путь к изображению тренажерного зала

const Home = () => {
  return (
    <div>
      <h2>Добро пожаловать в наш тренажерный зал!</h2>
      <img src={zalImage} alt="Тренажерный зал" style={{ width: '100%', maxWidth: '800px', height: 'auto', display: 'block', margin: '0 auto' }} />
      <p>Мы рады приветствовать вас на нашем сайте. Здесь вы найдете все необходимое для занятий спортом и достижения своих целей в фитнесе!</p>
      <p>Планируйте тренировки, следите за своим прогрессом, участвуйте в групповых занятиях и многое другое.</p>
    </div>
  );
}

export default Home;
