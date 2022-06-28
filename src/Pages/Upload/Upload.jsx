import './Upload.scss'
import thumbnail from '../../assets/Images/Upload-video-preview.jpg'
import axios from 'axios';
import React from 'react';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
    
    this.handleInputChange = 
    this.handleInputChange.bind(this);

    this.publishVideo = this.publishVideo.bind(this);
  }

    publishVideo = (e) => {
        e.preventDefault();
        if (this.state.title !== '' && this.state.description !== ''){
            axios.post('http://localhost:8000/videos', {
                title: this.state.title ,
                description: this.state.description
            })
            .then(response =>  {
                alert(response);
                this.props.history.push('/');
            })
            .catch(err =>  {
                console.error(err);
            });
        }
        
        
    }

    handleInputChange(event) {
        const value = event.target.value
        const name = event.target.name;
        if ( value.length < 1 ) {
            alert('Enter greater value')
        }
        
        this.setState({
          [name] : value
        });
    
    }
    render() {
        return(
            <div className='upload'>
                <h1 className='upload__title'>Upload video</h1>
                <div className='upload__flex' >
                    <div className='upload__flex__one'>
                        <h2 className='upload__subtitle' >VIDEO THUMBNAIL</h2>
                        <img className='upload__image' src={thumbnail} alt="" />
                    </div>
                    <div className='upload__flex__two'>
                        <form className="cta__form">
                            <div>
                                <label className="cta__form-label" >TITLE YOUR VIDEO</label>
                            </div>
                            <div className="cta__form-input">
                                <input 
                                id="nameBox" 
                                name='title'
                                className="cta__form-input__box" 
                                type="text" 
                                placeholder = " Add a title to your video"
                                onChange={this.handleInputChange}
                                value={this.state.titleField}
                                />
                            </div>   
                            <div>
                                <label className="cta__form-label">ADD A VIDEO DESCRIPTION</label>
                            </div>
                            <div className="cta__form-input">
                                <input 
                                id="commentBox" 
                                name='description'
                                className="cta__form-input__box2" 
                                type="text"
                                placeholder="  Add a description to your video"
                                onChange={this.handleInputChange}
                                value={this.state.descriptionField}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="cta__form-button">
                    <button onClick={this.publishVideo} type="submit" id="sendComment" className="cta__form-button__item">PUBLISH</button>
                    <button className="cta__form-button__item--cancel">CANCEL</button>
                </div>       
                
            </div>
          
        )
    } 
} 

export default Upload;
   