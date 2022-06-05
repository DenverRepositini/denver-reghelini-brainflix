import './Upload.scss'
import thumbnail from '../../assets/Images/Upload-video-preview.jpg'
import { Link } from "react-router-dom"


const Upload = (props) => {
    console.log(props)
    const publishVideo = (e) => {
        e.preventDefault();
        alert('Video published');
        // <Link to= '/'></Link>
        props.history.push('/')
    }
    
        return(
            <div className='upload'>
                <h1 className='upload__title'>Upload video</h1>
                <h2 className='upload__subtitle' >VIDEO THUMBNAIL</h2>
                <img className='upload__image' src={thumbnail} alt="" />
                <form className="cta__form">
                    <div>
                        <label className="cta__form-label" >TITLE YOUR VIDEO</label>
                    </div>
                    <div className="cta__form-input">
                        <input id="nameBox" className="cta__form-input__box" type="text" placeholder = " Add a title to your video"/>
                    </div>   
                    <div>
                        <label className="cta__form-label">ADD A VIDEO DESCRIPTION</label>
                    </div>
                    <div className="cta__form-input">
                        <input id="commentBox" className="cta__form-input__box2" placeholder="  Add a description to your video"/>
                    </div>
                    <div className="cta__form-button">
                        <Link className='cta__form-link' to='/'>
                            <button onClick={publishVideo} type="submit" id="sendComment" className="cta__form-button__item">PUBLISH</button>
                        </Link>
                    </div>       
                </form>
            </div>
          
        );
    }  

export default Upload;
   