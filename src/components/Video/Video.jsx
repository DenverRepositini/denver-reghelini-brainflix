import './Video.scss'
import Info from '../Info/Info';
import NewComment from '../NewComment/NewComment';
import Comments  from '../Comments/Comments';
import VideoList from '../VideoList/VideoList';
import play from '../../assets/Icons/play.svg'

const Video= (props) => { 
    // Rx props from Videopage state
    return(
        <>
            <div className='container'>
                <video className='media' poster={props.data.image} src=""></video>        
                <img className='control__play' src={play}/>          
            </div> 
            <div className='video-details'>
                <div className='video-details__one'>
                    <Info videoDescription={props.data} />
                    <NewComment />
                    <Comments commentsList={props.data.comments} />
                </div>
                <div className='video-details__two'>
                    <VideoList videos={props.list} routeId={props.data.id} />
                </div>
            </div> 
        </>
    )
}

export default Video;