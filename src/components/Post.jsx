import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox,  IconButton, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import React from 'react'

function Post() {
  return (
    <div>
        <Card sx={{margin: 5}}>
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                <MoreVertIcon />
                </IconButton>
            }
            title="Rayen"
            subheader="August 10, 2023"
        />
        <CardMedia
            component="img"
            height="20%"
            image="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            alt="Paella dish"
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon sx={{color:"red"}} />} />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
        </CardActions>
    </Card>
    </div>
    )
}

export default Post
