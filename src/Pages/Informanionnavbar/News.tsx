import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img1 from "../Informanionnavbar/imginformation/third.jpg";
import img2 from "../Informanionnavbar/imginformation/oNas.jpg";
import img3 from "../Informanionnavbar/imginformation/Second.jpg";
import './info.css'; // Импортируем CSS для стилей

function GroupExample() {
  return (
    <div className="custom-container">
      <h2 className="custom-title">Информация</h2> {/* Заголовок над картами */}
      <div className="card-group-container">
        <CardGroup className="custom-card-group">
          <Card className="custom-card">
            <Card.Img variant="top" src={img1} /> {/* Путь к вашему изображению 1 */}
            <Card.Body>
              <Card.Title>О нас 📖</Card.Title>
              <Card.Text>
                Фитнес-клуб "DIARDA"! Мы являемся идеальным местом для всех, кто стремится к здоровому образу жизни и активному отдыху.
                Наш клуб предлагает разнообразные услуги и удобства, чтобы помочь вам достичь ваших фитнес-целей и ощутить прилив энергии
                и бодрости каждый день.У нас вы найдете современный тренажерный зал, оснащенный самым передовым оборудованием,
                большой и атмосферный бассейн, а также залы для гимнастики, йоги, групповых тренеровок и бокса!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Img variant="top" src={img2} /> {/* Путь к вашему изображению 2 */}
            <Card.Body>
              <Card.Title>Ежемесячная акция🏷️</Card.Title>
              <Card.Text>
                <p>Каждый месяц мы радуем наших посетителей уникальными предложениями и специальными акциями,
                  чтобы сделать вашу тренировку еще более приятной и выгодной!Не упустите шанс улучшить свое
                  самочувствие и достичь новых результатов вместе с "DIARDA"! На этой неделе дарим вам уникальную
                  возможность получить бесплатное занятие с персональным тренером при покупке абонемента на месяц!
                  Поторопитесь, количество мест ограничено!</p>
                <p>
                  📅 Дата акции: 13.03.2024 - 13.04.2024 <br/>
                  📍 Место проведения: фитнес-клуб "DIARDA", адрес: str. Studentilor 7/1, Riscani <br/>
                  📞 Запись по телефону: +37312300000
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Img variant="top" src={img3}/> {/* Путь к вашему изображению 3 */}
            <Card.Body>
              <Card.Title>Правила клуба 📋</Card.Title>
              <Card.Text>
                Для входа в зал фитнес-клуба необходимо предъявить действующий абонемент или оплатить одноразовый входной билет в кассе
                клуба. Пожалуйста, убедитесь, что ваш абонемент или билет действителен на текущую дату.
                Также обязательно иметь с собой сменную обувь для занятий, а также полотенце для гигиенических процедур.
                В случае отсутствия действующего абонемента или билета, вход в зал будет запрещен. Спасибо за понимание и
                соблюдение правил клуба!
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default GroupExample;
