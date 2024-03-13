import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
export default function Cardpitanie() {

    const handleClick = () => {
        console.log('Icon clicked!')
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Верхние три карточки */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {/*Card 1*/}
                <Card sx={{ maxWidth: 345, margin: '15px', backgroundColor: 'rgba(255,255,255,0.8)', textAlign: 'center', borderRadius: 12 }}>
                    <CardMedia
                        component="img"
                        height="350" // Установите желаемую высоту изображения
                        image="https://i.postimg.cc/B616SM91/1-511x737-removebg-preview.png"
                        sx={{ objectFit: 'contain' }} // Добавьте этот стиль для управления размером изображения
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Протеин (2299 лей)
                            <IconButton onClick={handleClick}>
                            <ShoppingCartCheckoutIcon sx={{ fontSize: 30, color: 'black'}}/>
                            </IconButton>
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center', fontSize: '18px' }}>
                            Вес: 2.27 кг
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center', fontSize: '16px' }}>
                            Протеин необходим для набора мышечной массы.
                            Добавление протеина в рацион — отличный способ увеличить мышечную массу, к которому прибегают многие спортсмены.
                        </Typography>
                    </CardContent>
                </Card>
                {/*Card 2*/}
                <Card sx={{ maxWidth: 345, margin: '15px', backgroundColor: 'rgba(255,255,255,0.8)', textAlign: 'center', borderRadius: 12 }}>
                    <CardMedia
                        component="img"
                        height="350" // Установите желаемую высоту изображения
                        image="https://i.postimg.cc/sDvzY44N/removebg-preview.png"
                        sx={{ objectFit: 'contain' }} // Добавьте этот стиль для управления размером изображения
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Витамины (599 лей)
                            <IconButton onClick={handleClick}>
                                <ShoppingCartCheckoutIcon sx={{ fontSize: 30, color: 'black'}}/>
                            </IconButton>
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center', fontSize: '18px' }}>
                            Кол-во: 90 капсул
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center', fontSize: '16px' }}>
                            Витамины участвуют в синтезе ферментов, которые помогают перерабатывать пищу в энергию.
                            Это позволяет спортсменам быстрее восстанавливаться после тренировок и достигать лучших результатов.
                        </Typography>
                    </CardContent>
                </Card>
                {/*Card 3*/}
                <Card sx={{ maxWidth: 345, margin: '15px', backgroundColor: 'rgba(255,255,255,0.8)', textAlign: 'center', borderRadius: 12 }}>
                    <CardMedia
                        component="img"
                        height="350" // Установите желаемую высоту изображения
                        image="https://i.postimg.cc/7PBDJW0z/removebg-preview.png"
                        sx={{ objectFit: 'contain' }} // Добавьте этот стиль для управления размером изображения
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Креатин (599 лей)
                            <IconButton onClick={handleClick}>
                                <ShoppingCartCheckoutIcon sx={{ fontSize: 30, color: 'black'}}/>
                            </IconButton>
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center', fontSize: '18px' }}>
                            Вес: 300 г
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center', fontSize: '16px' }}>
                                Креатин помогает справляться с болью и физическим дискомфортом.
                                Кроме того, способствует укреплению суставов и сухожилий и восполняет запас энергии.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            {/* Нижние три карточки */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {/*Card 4*/}
                <Card sx={{ maxWidth: 345, margin: '15px', backgroundColor: 'rgba(255,255,255,0.8)', textAlign: 'center', borderRadius: 12 }}>
                    <CardMedia
                        component="img"
                        height="350" // Установите желаемую высоту изображения
                        image="https://i.postimg.cc/GhVCqTMh/removebg-preview.png"
                        sx={{ objectFit: 'contain' }} // Добавьте этот стиль для управления размером изображения
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Гейнер (749 лей)
                            <IconButton onClick={handleClick}>
                                <ShoppingCartCheckoutIcon sx={{ fontSize: 30, color: 'black'}}/>
                            </IconButton>
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center', fontSize: '18px' }}>
                            Вес: 1.3 кг
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center', fontSize: '16px' }}>
                            Гейнер для набора мышечной массы.
                            Белки в его составе снабжают организм строительным материалом для построения мускулатуры,
                            а углеводы служат топливом, необходимым для выполнения физических упражнений.
                        </Typography>
                    </CardContent>
                </Card>
                {/*Card 5*/}
                <Card sx={{ maxWidth: 345, margin: '15px', backgroundColor: 'rgba(255,255,255,0.8)', textAlign: 'center', borderRadius: 12 }}>
                    <CardMedia
                        component="img"
                        height="350" // Установите желаемую высоту изображения
                        image="https://i.postimg.cc/0NqqqRRT/removebg-preview.png"
                        sx={{ objectFit: 'contain' }} // Добавьте этот стиль для управления размером изображения
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Пре-комплекс (709 лей)
                            <IconButton onClick={handleClick}>
                                <ShoppingCartCheckoutIcon sx={{ fontSize: 30, color: 'black'}}/>
                            </IconButton>
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center', fontSize: '18px' }}>
                            Вес: 300 г
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center', fontSize: '16px' }}>
                            Предтренировочный комплекс помогает добиться огромных результатов во время тренировки.
                            При помощи активных веществ, входящих в его состав.
                            Повышенная концентрация внимания, улучшение кровотока и пампинг мышц, увеличению работоспособности и выносливости.
                        </Typography>
                    </CardContent>
                </Card>
                {/*Card 6*/}
                <Card sx={{ maxWidth: 345, margin: '15px', backgroundColor: 'rgba(255,255,255,0.8)', textAlign: 'center', borderRadius: 12 }}>
                    <CardMedia
                        component="img"
                        height="350" // Установите желаемую высоту изображения
                        image="https://i.postimg.cc/9Q9jSXSP/removebg-preview.png"
                        sx={{ objectFit: 'contain' }} // Добавьте этот стиль для управления размером изображения
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Аминокислоты (749 лей)
                            <IconButton onClick={handleClick}>
                                <ShoppingCartCheckoutIcon sx={{ fontSize: 30, color: 'black'}}/>
                            </IconButton>
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center', fontSize: '18px' }}>
                            Вес: 380 г
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center', fontSize: '16px' }}>
                            Аминокислоты необходимы для формирования мышц, сухожилий и связок.
                            Без аминокислот невозможен активный рост мышечной массы.
                            В спорте и фитнесе аминокислоты повышают работоспособность атлета и ускоряют процесс наращивания мышц.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

