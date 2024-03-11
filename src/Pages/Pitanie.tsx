import React, { Component } from 'react';
import CardPitanie from "../Components/Cardpitanie";
import backgroundImage from "../path/to/your/background/image.jpg"; // Путь к вашему фоновому изображению

class Pitanie extends Component {
    render() {
        const backgroundStyle = {
            backgroundImage: `url(https://5lb.ru/upload/iblock/7a9/pjubtayl4rbc9x5qon1j1weuyrdkhh7h.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        };

        return (
            <div style={backgroundStyle}>
                <CardPitanie />
            </div>
        );
    }
}

export default Pitanie;
