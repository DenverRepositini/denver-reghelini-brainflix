import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import Info from './components/Info/Info';
import NewComment from './components/NewComment/NewComment';
import Comments  from './components/Comments/Comments';
import videoDetailsJson from './Data/video-details.json';
import videosJson from './Data/videos.json';
import Upload from './Pages/Upload/Upload';
import Homepage from './Pages/Homepage/Homepage';
import VideoList from './components/VideoList/VideoList';

class App extends React.Component {

render(){
  return (
     <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/'exact component={Homepage} />
          <Route path='/upload' exact component={Upload} />
          <Route path='/:id' component={Video}/>
        </Switch>
      </div>
      </BrowserRouter>
    
  );
}
 
}

export default App;
