import React, {Component} from 'react';
import ActionAreaCard from "../Components/Actionareacard"; // Импортируем стили

class Abonement extends Component {
    render() {
        const containerStyle = {
            backgroundImage: "url('https://tulsu.ru/storage/app/uploads/public/630/7b4/3b0/6307b43b03b7b844244730.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '20px',
        };


        return (
            <div style={containerStyle}> {/* Добавляем стили */}
                <ActionAreaCard/>
            </div>
        );
    }
}

export default Abonement;

