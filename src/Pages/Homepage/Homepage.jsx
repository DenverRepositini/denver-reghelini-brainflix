import React from 'react';
import Video from '../../components/Video/Video';
import Info from '../../components/Info/Info';
import NewComment from '../../components/NewComment/NewComment';
import Comments  from '../../components/Comments/Comments';
import VideoList from '../../components/VideoList/VideoList';
import videoDetailsJson from '../../Data/video-details.json';


class Homepage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          details:videoDetailsJson[0],
          selectedVideoIndex:0
        }
      }  
    render(){
        console.log(this.state.details)
         return (
        <div>
             <div className='container'>
                <video className='media' poster={videoDetailsJson[0].image} controls src=""></video>               
            </div> 
            {/* <Video poster={this.state.details.image} /> */}
            <div>
                <Info videoDescription={videoDetailsJson[0]} />
                <NewComment />
                <Comments commentsList={videoDetailsJson[0].comments} />
                <VideoList routeId={videoDetailsJson[0].title} />
            </div> 
        </div>
     
    );
    }
   
}

export default Homepage;