import React from 'react';
import CarouselBox from "../Components/CarouselBox";
import Mycomand from "../Components/Mycomand";

class Home extends React.Component {
    render() {
        return (
            <div>
                <CarouselBox marginTop={10}/>
                <div className="carousel-mycomand-gap">
                    <Mycomand marginTop={100}/> {/* Пример передачи пропса marginTop */}
                </div>
            </div>
        );
    }
}

export default Home;
