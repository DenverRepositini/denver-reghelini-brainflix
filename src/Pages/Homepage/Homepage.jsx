import React from 'react';
import Video from '../../components/Video/Video';
import Info from '../../components/Info/Info';
import NewComment from '../../components/NewComment/NewComment';
import Comments  from '../../components/Comments/Comments';
import VideoList from '../../components/VideoList/VideoList';
// import this.state.details from '../../Data/video-details.json';
import axios from 'axios'


const api_key = "bd5ac12a-c27e-4c98-9133-a8757f9395cd"
const api_url= 'https://project-2-api.herokuapp.com'


class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          details:null
        }
      }  

    componentDidMount() {
         axios.get('https://project-2-api.herokuapp.com/videos?api_key=' + api_key)
          .then(res=> {
            axios.get('https://project-2-api.herokuapp.com/videos/' + res.data[0].id + '?api_key=' + api_key)
            .then(res => {
                this.setState({
                    details:res.data
                })
            }).catch(err => console.log(err))
          }).catch(err => console.log(err))
      }

    render(){
        if (this.state.details !== null ) 
            return (
                <div>
                    <div className='container'>
                        <video className='media' poster={this.state.details.image} controls src=""></video>               
                    </div> 
                    <div>
                        <Info videoDescription={this.state.details} />
                        <NewComment />
                        <Comments commentsList={this.state.details.comments} />
                        <VideoList routeId={this.state.details.id} />
                    </div> 
                </div>
            );
    }
   
}

export default Homepage;