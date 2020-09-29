import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import homeIMG from '../../images/about_card.jpg';

const About = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="About Image"
            height="140"
            image={homeIMG}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              This is the About Page
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Use the navigation above to go back to home page or logout
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default About;
