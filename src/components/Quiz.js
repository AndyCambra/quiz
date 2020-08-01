import React, { useEffect, useState } from 'react';
import questions from '../questions';
import Radio from './radio';
import { Typography, Grid, makeStyles, Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const [actualQuestion, setActualQuestion] = useState(0);
  const [results, setResults] = useState([]);
  const changeQuestion = (value) => {
    const selectedOption = questions[actualQuestion].options.find(q => q.value === value);
    setResults([...results, selectedOption.isCorrect])
    setActualQuestion(actualQuestion + 1);
  }
  const classes = useStyles();
  console.log(111, results.filter(f => f === true).length);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="h4">
            {questions[actualQuestion].label}
          </Typography>
        </Grid>
        <Grid item xs={5} />
        <Grid item xs={4}>
          <Radio options={questions[actualQuestion].options} changeQuestion={changeQuestion} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
