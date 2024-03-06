import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function IntroDivider() {
    return (
        <Card variant="outlined" sx={{ maxWidth: 700 }}>
            <Box sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h6" component="div">
                        Абонемент "Базовый"
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Стоимость: 150 Лей (Месяц)
                    </Typography>
                </Stack>
                <Typography color="black" variant="body2">
                    Доступ к тренажерному залу
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
            </Box>
        </Card>
    );
}
