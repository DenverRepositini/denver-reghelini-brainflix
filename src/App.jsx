import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import Info from './components/Info/Info'
import NewComment from './components/NewComment/NewComment';
import Comments  from './components/Comments/Comments';
import videoDetailsJson from './Data/video-details.json'
import videosJson from './Data/videos.json'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      details:videoDetailsJson[0],
      selectedVideoIndex:0
    }
  }  
  

render(){
  return (
    <BrowserRouter>
    <Switch>
      <Route/>
    </Switch>
    <div className="App">
      <Header />
      <Video poster={this.state.details.image} />
      <div className='flex'>
        <div className='flex__info'>
          <Info videoDescription={this.state.details} />
          <NewComment />
          <Comments commentsList={this.state.details.comments} />
        </div>
        <div className='list'>
            <h3 className='list__title'>NEXT VIDEOS</h3>
            {videosJson.map((video,index) =>  { 
                  if (index !== this.state.selectedVideoIndex) {
                      return (
                        <div className='list__item' key={video.id} onClick={()=> this.setState({details:videoDetailsJson[index], selectedVideoIndex: index})}>
                          <div className='list__image'>
                            <img className='list__image__item' src={video.image} alt={video.title} />
                          </div>
                          <div className='list__item__info'>
                            <p className='list__item__info--bold'>{video.title}</p>
                            <p>{video.channel}</p>
                          </div>
                          
                        </div>
                      )
                  }}
            )}
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}
 
}

export default App;
