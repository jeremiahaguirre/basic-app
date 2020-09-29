import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import homeIMG from '../../images/home_card.jpg';
import AddUserInfo from '../../components/AddUserInfo';
import fire from '../../config/server';
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

const Home = ({ classes }) => {
  const addInfo = (obj) => {
    fire
      .database()
      .ref()
      .child('UserInfo')
      .push(obj, (err) => {
        if (err) console.log(err);
      });
  };

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Home image"
            height="140"
            image={homeIMG}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              This is the Home Page
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Use the navigation above to see the use of routing
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <AddUserInfo addInfo={addInfo} />
    </div>
  );
};

export default Home;
