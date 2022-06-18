import './VideoList.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const api_key = "bd5ac12a-c27e-4c98-9133-a8757f9395cd"
const api_url= 'https://project-2-api.herokuapp.com'

class VideoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          details:[]
        }
      }  

    componentDidMount() {
        axios.get('https://project-2-api.herokuapp.com/videos?api_key=' + api_key)
          .then(res=> {
            this.setState({
              details:res.data
            });
          })
    }

    render(){
      return(
        <div className='list'>
          <h3 className='list__title'>NEXT VIDEOS</h3>
          <ul>
          {this.state.details.map((video) =>  { 
            if (video.id !== this.props.routeId) {
                return (
                  <li key={video.id}>
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
   
}

export default VideoList;