import React, { Component } from 'react';
import CardPitanie from "../Components/Cardpitanie";

class Pitanie extends Component {
    render() {
        const backgroundStyle = {
            backgroundImage: `url(https://olimp.ohana-fitness.ru/public/upload/zones/1/gallery/inkablukovaphoto41.jpg)`,
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
