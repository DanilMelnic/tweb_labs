import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import vtoroe from "../img/Homeimg/vtoroe.jpg";
import pervoe from "../img/Homeimg/pervoe.jpg";
import cetire from "../img/Homeimg/cetire.jpg";
import tretie from "../img/Homeimg/tretie.jpg";
import '../App.css';
interface CarouselBoxProps {
  marginTop: number; // Пропс для указания отступа
}

interface CarouselBoxState {
  interval: number;
  activeIndex: number;
}

class CarouselBox extends Component<CarouselBoxProps, CarouselBoxState> {
  private timerId: any;

  constructor(props: CarouselBoxProps) {
    super(props);
    this.state = {
      interval: 7000, // Интервал по умолчанию: 3 секунды
      activeIndex: 0, // Текущий активный слайд
    };
  }

  componentDidMount() {
    // Запускаем таймер для автоматической смены слайдов каждые this.state.interval миллисекунд
    this.timerId = setInterval(this.nextSlide, this.state.interval);
  }

  componentWillUnmount() {
    // Очищаем таймер при размонтировании компонента
    clearInterval(this.timerId);
  }

  nextSlide = () => {
    // Метод для перехода к следующему слайду
    const { activeIndex } = this.state;
    const images = [pervoe, vtoroe, tretie, cetire]; // Массив с изображениями
    const nextIndex = (activeIndex + 1) % images.length; // Определяем индекс следующего слайда
    this.setState({ activeIndex: nextIndex }); // Устанавливаем новый индекс активного слайда
  };

  selectSlide = (index: number) => {
    // Метод для обновления activeIndex при клике на индикатор
    this.setState({ activeIndex: index });
  };

  render() {
    const { activeIndex } = this.state;
    const { marginTop } = this.props; // Получаем значение отступа из пропсов

    return (

      <div style={{ marginTop: `${marginTop}px` }}> {/* Устанавливаем отступ */}
        <Carousel activeIndex={activeIndex} onSelect={this.selectSlide}>
          <Carousel.Item>
            <img className={"d-block w-100"} src={pervoe} alt={"Forest"} style={{ maxHeight: '800px', objectFit: 'cover' }} />
          </Carousel.Item>
          <Carousel.Item>
            <img className={"d-block w-100"} src={vtoroe} alt={"Forest"} style={{ maxHeight: '800px', objectFit: 'cover' }} />
          </Carousel.Item>
          <Carousel.Item>
            <img className={"d-block w-100"} src={tretie} alt={"Forest"} style={{ maxHeight: '800px', objectFit: 'cover' }} />
          </Carousel.Item>
          <Carousel.Item>
            <img className={"d-block w-100"} src={cetire} alt={"Forest"} style={{ maxHeight: '800px', objectFit: 'cover' }} />
          </Carousel.Item>
        </Carousel>

      </div>
    );
  }
}

export default CarouselBox;
