import React from 'react';
import Video from '../../components/Video/Video';
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
             <Video data={this.state.details} />           
            );
    }
   
}

export default Homepage;