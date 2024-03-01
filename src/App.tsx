import React from 'react';
import './App.css';
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthButtons from "./Components/Authbuttons";
function App() {
  return (
    <div>
      <Header />
        <AuthButtons
  loginButtonProps={{ /* свойства для настройки кнопки Войти */ }}
  registerButtonProps={{ /* свойства для настройки кнопки Зарегистрироваться */ }}
/>
    </div>
  );
}

export default App;