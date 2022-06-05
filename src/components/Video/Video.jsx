import './Video.scss'
import React from 'react';
import Info from '../../components/Info/Info';
import NewComment from '../../components/NewComment/NewComment';
import Comments  from '../../components/Comments/Comments';
import VideoList from '../VideoList/VideoList';
import axios from 'axios'


const api_key = "bd5ac12a-c27e-4c98-9133-a8757f9395cd"
const api_url= 'https://project-2-api.herokuapp.com'



class Video extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          details:null
        }
      }  

    componentDidMount() {
         axios.get('https://project-2-api.herokuapp.com/videos/' + this.props.match.params.id + '?api_key=' + api_key)
         .then(res => {
            this.setState({
                details:res.data
            })
            console.log('text')
        }).catch(err => console.log(err))
      }

      componentDidUpdate(prevProps) {
        if (prevProps !==  this.props)
            axios.get('https://project-2-api.herokuapp.com/videos/' + this.props.match.params.id + '?api_key=' + api_key)
            .then(res => {
            this.setState({
                details:res.data
            })
            console.log('conosle')
        }).catch(err => console.log(err))
        }
        render(){
        console.log('render')

        if (this.state.details !== null)
        return (
            <>
                <div className='container'>
                    <video className='media' poster={this.state.details.image} controls src=""></video>               
                </div> 
                <div>
                    <Info videoDescription={this.state.details} />
                    <NewComment />
                    <Comments commentsList={this.state.details.comments} />
                    <VideoList routeId={this.state.details.title} />
                </div> 
            </>
        );
      }
    }

export default Video;