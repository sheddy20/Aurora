import React from 'react';

import {
    Typography,
    AppBar,
    Card,
    Button,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
} from '@material-ui/core';
import useStyles from './components/Styles';
import { PhotoCamera } from '@material-ui/icons';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={ classes.icon}/>
                    <Typography variant="h6">
                        Random Photos
                    </Typography>
              </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm" style={{ marginTop: '100px' }}>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Random Photos
                       </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hey everyone, my name is Abel Shedrack Nicholas, Random Photos is my first react project with material UI, is web app that displays random images from unsplash, although there is nothing special about this project, REACT IS AWESOME.
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                       Random Photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                       Photos
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                         <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterbottom variant="h5">
                                        Photos
                                    </Typography>
                                    <Typography>
                                        This is a media card. you can display your informations here.
                                    </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                         <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                            </Card>
                        </Grid>
                        ))}
                       
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
               </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    This Material UI footer section.
               </Typography>
            </footer>
       </React.Fragment>
    )
};

export default App