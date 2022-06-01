import './Video.scss'
import Info from '../../components/Info/Info';
import NewComment from '../../components/NewComment/NewComment';
import Comments  from '../../components/Comments/Comments';
import VideoList from '../VideoList/VideoList';
import data from '../../Data/video-details.json'


const Video = (props) => {
    const selectedVideo= data.find(element => element.title === props.match.params.id)
    console.log(props)
    return (
        <>
            <div className='container'>
                <video className='media' poster={selectedVideo.image} controls src=""></video>               
            </div> 
            <div>
                <Info videoDescription={selectedVideo} />
                <NewComment />
                <Comments commentsList={selectedVideo.comments} />
                <VideoList routeId={selectedVideo.title} />
            </div> 
        </>
    );
}

export default Video;