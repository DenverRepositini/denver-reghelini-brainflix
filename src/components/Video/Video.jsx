import Info from '../Info/Info';
import NewComment from '../NewComment/NewComment';
import Comments  from '../Comments/Comments';
import VideoList from '../VideoList/VideoList';
import './Video.scss'

const Video= (props) => { 

    return(
        <>
            <div className='container'>
                <video className='media' poster={props.data.image} controls src=""></video>               
            </div> 
            <div className='video-details'>
                <div className='video-details__one'>
                    <Info videoDescription={props.data} />
                    <NewComment />
                    <Comments commentsList={props.data.comments} />
                </div>
                <div  className='video-details__two'>
                    <VideoList routeId={props.data.id} />
                </div>
            </div> 
        </>
    )
}

export default Video;