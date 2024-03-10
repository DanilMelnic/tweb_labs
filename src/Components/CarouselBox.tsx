import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import vtoroe from "../img/Homeimg/vtoroe.jpg";
import pervoe from "../img/Homeimg/pervoe.jpg";
import tretie from "../img/Homeimg/tretie.jpg";

interface CarouselBoxProps {}

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
    const images = [pervoe, vtoroe, tretie]; // Массив с изображениями
    const nextIndex = (activeIndex + 1) % images.length; // Определяем индекс следующего слайда
    this.setState({ activeIndex: nextIndex }); // Устанавливаем новый индекс активного слайда
  };

  selectSlide = (index: number) => {
    // Метод для обновления activeIndex при клике на индикатор
    this.setState({ activeIndex: index });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <Carousel activeIndex={activeIndex} onSelect={this.selectSlide}>
        <Carousel.Item>
          <img className={"d-block w-100"} src={pervoe} alt={"Forest"} style={{ maxHeight: '700px', objectFit: 'cover' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img className={"d-block w-100"} src={vtoroe} alt={"Forest"} style={{ maxHeight: '700px', objectFit: 'cover' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img className={"d-block w-100"} src={tretie} alt={"Forest"} style={{ maxHeight: '700px', objectFit: 'cover' }} />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselBox;
