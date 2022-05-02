import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardPokemon = (props) => {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    /*     <div>
          Mi nombre es {props.data.name}
          <img src={props.data.sprites.front_default} alt={props.data.name} />
        </div> */

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={props.data.name}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.data.sprites.front_default}
        alt={props.data.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Mira mis stats
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Stats:</Typography>
          <Typography paragraph>
            {props.data.stats.map((stat, i) => {
              return <p key={i}>{stat.stat.name}: {stat.base_stat}</p>
            })}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

  );

}

export default CardPokemon;
