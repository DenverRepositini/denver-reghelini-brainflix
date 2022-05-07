import './Info.scss'
import data from '../../Data/video-details.json'
import views from '../../assets/Icons/views.svg'
import likes from '../../assets/Icons/likes.svg'
import moment from 'moment'


// let today = new Date(data[0].timestamp);

// let month = today.getMonth() + 1;
// let year = today.getFullYear();
// let date = today.getDate();




const Info= () => {
    return(
        <section>
            {data.map(details => (
                <VideoInfo
                title={details.title}
                channel={details.channel}
                date={details.timestamp}
                views={details.views}
                likes={details.likes}
                description={details.description}
                comments={details.comments}
                 />


                 ))}
        </section>
    )
}


const VideoInfo = (props) => {
    return (
        <div className='video-info'>
            <div className='title'>
                {props.title}
            </div>
            <div className='info' >
                <div className='info__channel'>
                    <p>By {props.channel} </p>
                    <p>{moment(props.date).format('MM/DD/ YYYY')}</p>
                </div>
                <div className='info__views' >
                    <p><img src={views} alt="" />{props.views}</p> 
                    <p><img src={likes} alt="" />{props.likes}</p>
                </div>
            </div>
            <div className='description'>
                <p>{props.description}</p>
            </div>
            <div className='comments'>
                {props.comments.length} Comments
            </div>
        </div>
    );
}


export default Info;