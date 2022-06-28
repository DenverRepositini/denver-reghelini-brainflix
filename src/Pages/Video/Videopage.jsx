import './Videopage.scss';
import React from 'react';
import Video from '../../components/Video/Video';
import axios from 'axios';

const api_url = 'http://localhost:8000/videos'

class Videopage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          details:null,
          list: null,
        };
    }

    componentDidMount() {
      // axios call for video list
    //   axios.get(api_url + '?api_key=' + api_key)
      axios.get(api_url)
      .then(res=> { 
          // Rx entire video list to be used as props
          this.setState({
              list:res.data
          });
       
          // checking if single video page or home page
          if (this.props.match.path !== '/' ) {
                console.log('Single video page');
              // fetching single video details using route parameters
            //   axios.get(api_url + '/' + this.props.match.params.id + '?api_key=' + api_key)
            axios.get(api_url + '/' + this.props.match.params.id)
              .then(res => {
                  // setting state to single video data
                  this.setState({
                      details:res.data
                  });
              })
              .catch(err => console.log(err));
          } else {
              // fetching homepage video details using response from first axiso call (line 22)
            //   axios.get(api_url + '/' + res.data[0].id + '?api_key=' + api_key)
            axios.get(api_url + '/' + res.data[0].id)
              .then(res => { console.log('Homepage video did mount')
                  // setting state to homepage video
                  this.setState({
                      details:res.data
                  });
              })
              .catch(err => console.log(err));
          }
          
      })
      .catch(err => console.log(err)); }

    componentDidUpdate(prevProps) {
        console.log('Component update');
        // Check if path is homepage
        if (this.props.match.path !== '/' ) {
            if (prevProps !== this.props) {
                // fetch single video details and update state
                axios.get(api_url + '/' + this.props.match.params.id)
                .then(res => { 
                    this.setState({
                        details:res.data
                    });
                    // Scroll to top when details received 
                    window.scrollTo(0,0);
                })
                .catch(err => console.log(err));
            }
        } else {
            // If path is homepage
            if (prevProps !== this.props) {   
                console.log('Update homepage');
                // fetch data for homepage video/ update state
                // Homepage video is first element of list state
                axios.get(api_url + '/' + this.state.list[0].id)
                .then(res => {
                    this.setState({
                        details:res.data
                    });
                })
                .catch(err => console.log(err));
            }
        }
    }
    

    render(){
        if (this.state.list !== null ) {
            if (this.state.details !== null) 
            return <Video list={this.state.list} data={this.state.details} />
        }
            
    }
}

export default Videopage;