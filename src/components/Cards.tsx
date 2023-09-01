import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// @ts-ignore
export default function ActionAreaCard({image,height, title, description}) {
    return (
        <Card sx={{ maxWidth: 345, maxHeight:470 }} className="mb-5 bg-amber-50">
            <CardActionArea className="">
                <CardMedia

                    component="img"
                    height={height}
                    image={image}
                    alt="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div" >
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className={"text-justify"}>
                        {description}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}
