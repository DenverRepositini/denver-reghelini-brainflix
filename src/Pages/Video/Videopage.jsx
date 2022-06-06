import './Videopage.scss'
import React from 'react';
import Video from '../../components/Video/Video';
import axios from 'axios'

const api_key = "bd5ac12a-c27e-4c98-9133-a8757f9395cd"
const api_url= 'https://project-2-api.herokuapp.com'


class Videopage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          details:null
        };
    };

    componentDidMount() {
        axios.get('https://project-2-api.herokuapp.com/videos/' + this.props.match.params.id + '?api_key=' + api_key)
        .then(res => {
            this.setState({
                details:res.data
            });
        })
        .catch(err => console.log(err));
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props)
            axios.get('https://project-2-api.herokuapp.com/videos/' + this.props.match.params.id + '?api_key=' + api_key)
            .then(res => {
                this.setState({
                    details:res.data
                });
                window.scrollTo(0,0);
            })
            .catch(err => console.log(err));
    }

    render(){
        if (this.state.details !== null)
            return <Video data={this.state.details} />
    }
}

export default Videopage;