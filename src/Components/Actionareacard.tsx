import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Вы можете настроить высоту по вашему усмотрению
    marginLeft: '0px', // Добавленный отступ слева
};

const cardStyle: React.CSSProperties = { // Указываем тип CSSProperties для cardStyle
    margin: '5px', // Отступ между карточками
    textAlign: 'center',

};

export default function ActionAreaCard() {
    return (
        <div style={containerStyle}>
            <Card sx={{ maxWidth: 345 }} style={cardStyle}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://tse4.mm.bing.net/th/id/OIG1.PvMft99QC60DpfkM_5nf?pid=ImgGn"
                        style={{ maxWidth: '100%', height: 'auto' }} // Устанавливаем размеры изображения
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Дневной
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Занятия с 14.00 до 18.00 все дни.
                            26 тренировок. Заморозка отсутствует.
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Comic Sans MS', fontWeight: 'bold', fontSize: '18px' }}>
                            Цена: 200 лей
                        </Typography>
                    </CardContent>

            </Card>
            <Card sx={{ maxWidth: 345 }} style={cardStyle}>

                    <CardMedia
                        component="img"
                        height="140"
                        image="https://tse3.mm.bing.net/th/id/OIG1.nCgvy6XBVWwaS4wgXvDs?pid=ImgGn"
                        style={{ maxWidth: '100%', height: 'auto' }} // Устанавливаем размеры изображения
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Семейный
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Занятия в любой день и время.
                            26 тренировок. Заморозка отсутствует.
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Comic Sans MS', fontWeight: 'bold', fontSize: '18px' }}>
                            Цена: 240 лей
                        </Typography>
                    </CardContent>

            </Card>
            <Card sx={{ maxWidth: 345 }} style={cardStyle}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://tse4.mm.bing.net/th/id/OIG3.nD2PAhuy.j1jlhZotbvP?pid=ImgGn"
                        style={{ maxWidth: '100%', height: 'auto' }} // Устанавливаем размеры изображения
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Разовый
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Разовая тренировка удобна для пробного визита.
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Comic Sans MS', fontWeight: 'bold', fontSize: '18px' }}>
                            Цена: 50 лей
                        </Typography>
                    </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }} style={cardStyle}>

                    <CardMedia
                        component="img"
                        height="140"
                        image="https://tse3.mm.bing.net/th/id/OIG2.rfdIKhxjfq1a8nlVPSPw?pid=ImgGn"
                        style={{ maxWidth: '100%', height: 'auto' }} // Устанавливаем размеры изображения
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Безлимит
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Заморозка до 14 дней непрерывно. Посещение в любой день и время.
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Comic Sans MS', fontWeight: 'bold', fontSize: '18px' }}>
                            Цена: 450 лей
                        </Typography>
                    </CardContent>
            </Card>
        </div>
    );
}
