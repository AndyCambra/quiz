import React from 'react';
import { Typography, Grid, makeStyles, Button} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F9A540',
    height: '100vh'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cuanto: {
      fontSize: '10em',
      fontWeight: '800',
      color: '#1F9008',
      letterSpacing: '-0.1em',
      opacity: '0.4',
      lineHeight:'0.7em'
    },
    sabes:{
        fontSize: '11em',
        fontWeight: '800',
        color: '#6811BF',
        opacity: '0.5',
        letterSpacing: '-0.1em',
        lineHeight:'0.5em',
        animationName: crece,
        animationDuration: '4s',
        animationFillMode: 'fowards',       
},
sobre:{
    fontSize: '11em',
    fontWeight: '800',
    color: '#4BB2DC',
    opacity: '0.5',
    letterSpacing: '-0.1em',
    lineHeight:'0.5em',
},
plantas:{
    fontSize: '11em',
    fontWeight: '800',
    color: '#D82419',
    opacity: '0.5',
    letterSpacing: '-0.1em',
    lineHeight:'0.4em',
},
keyframes crece{
    from{
        transform:'scale(0.1)'
    }
    to{
        transform:'scale(1)'
    }
}
bajada:{
    letterSpacing:'-.03em',
    lineHeight:'1.2em',
    fontWeight:'600',
    marginTop: '.5em'
}
}));

const Welcome =() =>{
   const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="h2" className={classes.cuanto}>
            Cuánto 
          </Typography>
          <Typography variant="h2" className={classes.sabes}>
            sabés 
          </Typography>
          <Typography variant="h2" className={classes.sobre}>
            sobre
          </Typography>
          <Typography variant="h2" className={classes.plantas}>
            plantas?
          </Typography>
          
        </Grid>
        <Grid item xs={5} />
        <Grid item xs={5}>
         <Typography variant="h6" className={classes.bajada}>
             Respondé el quiz y averiguá tu nivel de conocimiento sobre el reino vegetal.
         </Typography>
        </Grid>
         <Grid item xs={12} style={{ textAlign: 'center' }}>
         <Button variant="contained" color="primary">GO</Button>
         </Grid>
      </Grid>
    </div>
  );
}

export default Welcome;
