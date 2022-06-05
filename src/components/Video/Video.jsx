import Info from '../Info/Info';
import NewComment from '../NewComment/NewComment';
import Comments  from '../Comments/Comments';
import VideoList from '../VideoList/VideoList';

const Video= (props) => { 

    return(
        <div>
        <div className='container'>
            <video className='media' poster={props.data.image} controls src=""></video>               
        </div> 
        <div>
            <Info videoDescription={props.data} />
            <NewComment />
            <Comments commentsList={props.data.comments} />
            <VideoList routeId={props.data.id} />
        </div> 
    </div>
    )
}

export default Video;