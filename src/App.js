import React, { useEffect, useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from './components/welcome';
import Quiz from './components/Quiz';

const App = () => {
 
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/quiz" exact component={Quiz}/>
      <Route component={Welcome}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
