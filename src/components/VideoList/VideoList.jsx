import './VideoList.scss'
import React from 'react';
import { Link } from 'react-router-dom';

const VideoList =(props) => {
  return(
    <div className='list'>
      <h3 className='list__title'>NEXT VIDEOS</h3>
      <ul>
        {
        // using props from Video component to map out video list
        props.videos.map((video) =>  { 
          // Render video list except selected video
          if (video.id !== props.routeId) {
              return (
                <li key={video.id}>
                  {/* Creating links for each videolist item for /:id route */}
                  <Link to= {`/${video.id}`} >
                    <div className='list__item' >
                        <div className='list__image'>
                          <img className='list__image__item' src={video.image} alt={video.title} />
                        </div>
                      <div className='list__item__info'>
                        <p className='list__item__info--bold'>{video.title}</p>
                        <p>{video.channel}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              );  
          }
        }
        )}
      </ul>
    </div>
  )
}
   
// }

export default VideoList;