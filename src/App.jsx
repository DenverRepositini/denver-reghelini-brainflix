import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import Info from './components/Info/Info'
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
    <div className="App">
      <Header />
      <Video poster={this.state.details.image} />
      <Info videoDescription={this.state.details} />
      <Comments commentsList={this.state.details.comments} />
      <div>
          {videosJson.map((video,index) =>  { 
                if (index !== this.state.selectedVideoIndex) {
                    return (
                      <div key={video.id} onClick={()=> this.setState({details:videoDetailsJson[index], selectedVideoIndex: index})}>
                        <p>{video.channel}</p>
                        <img className='list-image' src={video.image} alt={video.title} />
                        <p >{video.title}</p>
                      </div>
                    )
                }}
          )}
      </div>
    </div>
  );
}
 
}

export default App;
