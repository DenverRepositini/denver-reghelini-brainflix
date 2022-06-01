import './VideoList.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import videoDetailsJson from '../../Data/video-details.json';
import videosJson from '../../Data/videos.json';

class VideoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          details:videoDetailsJson[0],
          selectedVideoIndex:0
        }
      }  
    render(){
         return(
        <div className='list'>
        <h3 className='list__title'>NEXT VIDEOS</h3>
        {videosJson.map((video) =>  { 
              if (video.title !== this.props.routeId) {
                  return (
                    <div className='list__item' key={video.id}>
            
                      <Link to= {`/${video.title}`} >
                      <div className='list__image'>
                         <img className='list__image__item' src={video.image} alt={video.title} />
                      </div>
                      </Link>
                      <div className='list__item__info'>
                        <p className='list__item__info--bold'>{video.title}</p>
                        <p>{video.channel}</p>
                      </div>
                      
                    </div>
                  )
              }}
        )}
    </div>
    )
    }
   
}

export default VideoList;