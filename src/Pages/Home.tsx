import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox marginTop={10}/> {/* Устанавливаем отступ в 20 пикселей */}
            </div>
        );
    }
}

export default Home;