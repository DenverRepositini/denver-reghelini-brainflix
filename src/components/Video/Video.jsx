import './Video.scss'
import data from '../../Data/video-details.json'


const Video = () => {
    return (
        <div>
            <div className='container'>
                <video className='media' poster={data[0].image} controls src=""></video>               
            </div> 
        </div>
    );
}

export default Video;