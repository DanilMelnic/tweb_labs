import React from 'react';
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import backgroundImage from "../img/Homeimg/foncomand.jpg";
import image from "../img/Homeimg/Danil.jpg";
import image1 from "../img/Homeimg/Arina.jpg";
import image2 from "../img/Homeimg/Dima.jpg";
import '../App.css';
const cardStyle: React.CSSProperties = {
    margin: '10px',
    textAlign: 'center',
};

const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh', // Можно настроить высоту по вашему усмотрению
};

interface MycomandProps {
  marginTop: number; // Пропс для указания отступа
}

const Mycomand: React.FC<MycomandProps> = ({ marginTop }) => {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      minHeight: '70vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className="App" style={{ marginTop: `${marginTop}px` }}>
        <header className="App-header">
          <h1 className="team-title">Наша команда</h1>
          <div style={containerStyle}>
            <Card sx={{ maxWidth: 345 }} style={cardStyle}>
              <CardMedia
                component="img"
                height="140"
                image={image} // Использование переменной с путем к изображению
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Тренер
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  ㅤㅤМельник Данил ㅤЮрьевич
                </Typography>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Comic Sans MS', fontWeight: 'bold', fontSize: '18px' }}>
                  Возраст:30 лет, Тяжелая атлетика
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }} style={cardStyle}>
              <CardMedia
                component="img"
                height="140"
                image={image1}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Тренер
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  ㅤㅤПавленко Арина ㅤㅤАндреевна
                </Typography>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Comic Sans MS', fontWeight: 'bold', fontSize: '18px' }}>
                  Возраст:20 лет, Гимнастика
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }} style={cardStyle}>
              <CardMedia
                component="img"
                height="140"
                image={image2} // Использование переменной с путем к изображению
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Тренер
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  Шкаребный Дмитрий Михайлович
                </Typography>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Comic Sans MS', fontWeight: 'bold', fontSize: '18px' }}>
                  Возраст: 30 лет, Легкая атлетика
                </Typography>
              </CardContent>
            </Card>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Mycomand;
