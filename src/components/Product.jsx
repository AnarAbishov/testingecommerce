import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import photo from '../images/iphone.jpg';
import azn from '../images/azn.png';
import {useNavigate} from "react-router-dom";

export default function ImgMediaCard({product:{id,title,image,price,description,category,rating}}) {
    const navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: 200 }} className="card">
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={image}
                style={{width: '100%', height: '200px'}}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title.substring(0,20)}...
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description.substring(0,60)}...
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {price} - <img src={azn} alt="azn" style={{width: '10px', height: '10px'}}/>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button onClick={()=>navigate(`/productinfo/${id}`)} size="small">Daha ətraflı</Button>
            </CardActions>
        </Card>
    );
}