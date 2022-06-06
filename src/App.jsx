import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.scss';
import Header from './components/Header/Header';
import Videopage from './Pages/Video/Videopage';
import Upload from './Pages/Upload/Upload';
import Homepage from './Pages/Homepage/Homepage';

class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path='/'exact component={Homepage} />
            <Route path='/upload' exact component={Upload} />
            <Route path='/:id' component={Videopage}/>
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  } 
}

export default App;
