// import React from 'react'
import './Info.scss'
import views from '../../assets/Icons/views.svg'
import likes from '../../assets/Icons/likes.svg'


const Info= (props) => { 

    const details = props.videoDescription

    return(
        <section>
                <VideoInfo
                title={details.title}
                channel={details.channel}
                date={details.timestamp}
                views={details.views}
                likes={details.likes}
                description={details.description}
                comments={details.comments}
                 />
                 
        </section>
    )
}


const VideoInfo = (props) => {

    let today = new Date(props.date);

    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let day = today.getDate();

    let formattedDate = month + '/' + day + '/' + year

    return (
        <div className='video-info'>
            <div className='title'>
                {props.title}
            </div>
            <div className='info' >
                <div className='info__item'>
                    <p className='info__item--bold'>By {props.channel} </p>
                    <p>{formattedDate}</p>
                </div>
                <div className='info__item' >
                    <p><img src={views} className='info__item__image' alt="views icon" />{props.views}</p> 
                    <p><img src={likes} className='info__item__image' alt="like icon" />{props.likes}</p>
                </div>
            </div>
            <div className='description'>
                <p className='description__text'>{props.description}</p>
            </div>
            <div className='comments'>
                {props.comments.length} Comments
            </div>
        </div>
    );
}


export default Info;