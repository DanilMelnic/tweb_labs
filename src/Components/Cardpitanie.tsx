import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Cardpitanie() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Верхние три карточки */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {/*Card 1*/}
                <Card sx={{ maxWidth: 345, margin: '15px', backgroundColor: 'rgb(255,255,255)', textAlign: 'center' }}>
                    <CardMedia
                        component="img"
                        height="350" // Установите желаемую высоту изображения
                        image="https://sportlandia.md/image/cache/webp/catalog/products/67/1031667/1-511x737.webp"
                        sx={{ objectFit: 'contain' }} // Добавьте этот стиль для управления размером изображения
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Протеин
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center' }}>
                            Протеин необходим для набора мышечной массы.
                            Добавление протеина в рацион — отличный способ увеличить мышечную массу, к которому прибегают многие спортсмены.
                        </Typography>
                    </CardContent>
                </Card>
                {/*Card 2*/}
                <Card sx={{ maxWidth: 345, margin: '15px', backgroundColor: 'rgb(255, 255, 255)', textAlign: 'center' }}>
                    <CardMedia
                        component="img"
                        height="350" // Установите желаемую высоту изображения
                        image="https://sportlandia.md/image/cache/webp/catalog/products/71/1077171/1-511x737.webp"
                        sx={{ objectFit: 'contain' }} // Добавьте этот стиль для управления размером изображения
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Витамины
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center' }}>
                            Витамины участвуют в синтезе ферментов, которые помогают перерабатывать пищу в энергию.
                            Это позволяет спортсменам быстрее восстанавливаться после тренировок и достигать лучших результатов.
                        </Typography>
                    </CardContent>
                </Card>
                {/*Card 3*/}
                <Card sx={{ maxWidth: 345, margin: '15px', backgroundColor: 'rgb(255, 255, 255)', textAlign: 'center' }}>
                    <CardMedia
                        component="img"
                        height="350" // Установите желаемую высоту изображения
                        image="https://sportlandia.md/image/cache/webp/catalog/products/02/1097002/1-511x737.webp"
                        sx={{ objectFit: 'contain' }} // Добавьте этот стиль для управления размером изображения
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Креатин
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center' }}>
                                Креатин помогает справляться с болью и физическим дискомфортом.
                                Кроме того, способствует укреплению суставов и сухожилий и восполняет запас энергии.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            {/* Нижние три карточки */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {/*Card 4*/}
                <Card sx={{ maxWidth: 345, margin: '15px', backgroundColor: 'rgb(255, 255, 255)', textAlign: 'center' }}>
                    <CardMedia
                        component="img"
                        height="350" // Установите желаемую высоту изображения
                        image="https://sportlandia.md/image/cache/webp/catalog/products/71/1096971/1-511x737.webp"
                        sx={{ objectFit: 'contain' }} // Добавьте этот стиль для управления размером изображения
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Гейнер
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center' }}>
                            Гейнер для набора мышечной массы.
                            Белки в его составе снабжают организм строительным материалом для построения мускулатуры,
                            а углеводы служат топливом, необходимым для выполнения физических упражнений.
                        </Typography>
                    </CardContent>
                </Card>
                {/*Card 5*/}
                <Card sx={{ maxWidth: 345, margin: '15px', backgroundColor: 'rgb(255, 255, 255)', textAlign: 'center' }}>
                    <CardMedia
                        component="img"
                        height="350" // Установите желаемую высоту изображения
                        image="https://sportlandia.md/image/cache/webp/catalog/products/12/1100112/1-511x737.webp"
                        sx={{ objectFit: 'contain' }} // Добавьте этот стиль для управления размером изображения
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Пре-комплекс
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center' }}>
                            Предтренировочный комплекс помогает добиться огромных результатов во время тренировки.
                            При помощи активных веществ, входящих в его состав.
                            Повышенная концентрация внимания, улучшение кровотока и пампинг мышц, увеличению работоспособности и выносливости.
                        </Typography>
                    </CardContent>
                </Card>
                {/*Card 6*/}
                <Card sx={{ maxWidth: 345, margin: '15px', backgroundColor: 'rgb(255, 255, 255)', textAlign: 'center' }}>
                    <CardMedia
                        component="img"
                        height="350" // Установите желаемую высоту изображения
                        image="https://sportlandia.md/image/cache/webp/catalog/products/04/1034804/1-511x737.webp"
                        sx={{ objectFit: 'contain' }} // Добавьте этот стиль для управления размером изображения
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Аминокислоты
                        </Typography>
                        <Typography variant="body2" color="black" style={{ textAlign: 'center' }}>
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

