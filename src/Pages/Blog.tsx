import React, { Component, ChangeEvent } from 'react';
import BlogPost from '../Components/BlogPost';

interface BlogState {
    blogPosts: {
        title: string;
        content: string;
    }[];
}

class Blog extends Component<{}, BlogState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            blogPosts: [
                { title: 'Открытие нового фитнес-зала с современным оборудованием', content: 'С радостью сообщаем о запуске нового фитнес-зала в нашем клубе. Новые тренажеры, просторные зоны для занятий, комфортные раздевалки и многое другое обеспечат вам отличный опыт тренировок. Приглашаем всех желающих присоединиться!' },
                { title: 'Введение новых групповых занятий', content: 'Расширяем расписание групповых тренировок! Теперь вы можете присоединиться к нашим новым занятиям, включая йогу, пилатес, функциональный тренинг и многое другое. Наши опытные инструкторы помогут вам достичь ваших фитнес-целей.' },
                { title: 'Специальные предложения для новых клиентов', content: 'У нас для вас отличные новости! Все новые клиенты получают скидку 20% на первый месяц членства. Это отличная возможность попробовать все преимущества нашего клуба по выгодной цене. Приходите и присоединяйтесь к нашему фитнес-сообществу.' },
                { title: 'Тренировки на открытом воздухе', content: 'Лето - отличное время для тренировок на свежем воздухе! Мы предлагаем различные тренировки на нашей открытой площадке, включая занятия йогой, функциональным тренингом и кардио. Наслаждайтесь солнцем и поддерживайте свою форму.' },
                { title: 'Новая коллекция спортивной одежды в нашем магазине', content: 'Обновите свой гардероб для тренировок с нашей новой коллекцией спортивной одежды. Мы предлагаем стильные и удобные вещи для всех видов тренировок. Посетите наш магазин и выберите что-то для себя.' },
                { title: 'Специальные мастер-классы от приглашенных тренеров', content: 'Не упустите возможность участвовать в наших специальных мастер-классах, проводимых приглашенными тренерами. Получите новые знания, опыт и вдохновение для своих тренировок. Расписание мастер-классов доступно на нашем сайте.' },
            ],
        };
    }

    handleInputChange = (index: number, field: 'title' | 'content', value: string) => {
        const updatedBlogPosts = [...this.state.blogPosts];
        updatedBlogPosts[index][field] = value;
        this.setState({ blogPosts: updatedBlogPosts });
    };

    render() {
        const containerStyle: React.CSSProperties = {
            backgroundImage: "url('https://fonoteka.top/uploads/posts/2022-09/1663841570_9-phonoteka-org-p-sport-zal-fon-instagram-10.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
        };

        const rowStyle: React.CSSProperties = {
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
        };

        const cellStyle: React.CSSProperties = {
            flex: 1,
            width: '40%', // Увеличено значение ширины ячейки
            padding: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            margin: '10px',
            display: 'flex',
            flexDirection: 'column', // Изменено на вертикальный ряд
            alignItems: 'center', // Выравнивание по центру
        };

        const inputStyle: React.CSSProperties = {
            marginBottom: '10px', // Добавлен отступ между заголовком и содержанием
            fontSize: '1rem', // Размер заголовка (может быть настроен по вашему усмотрению)
        };

        const contentStyle: React.CSSProperties = {
            fontSize: '1rem', // Размер содержания
        };

        return (
            <div style={containerStyle}>
                <div style={rowStyle}>
                    {this.state.blogPosts.slice(0, 3).map((post, index) => (
                        <div key={index} style={cellStyle}>
                            <h3 style={inputStyle}>{post.title}</h3>
                            <div style={contentStyle}>
                                {post.content}
                            </div>
                        </div>
                    ))}
                </div>
                <div style={rowStyle}>
                    {this.state.blogPosts.slice(3).map((post, index) => (
                        <div key={index} style={cellStyle}>
                            <h3 style={inputStyle}>{post.title}</h3>
                            <div style={contentStyle}>
                                {post.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Blog;
