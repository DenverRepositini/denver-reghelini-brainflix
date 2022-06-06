import React from 'react'
import './Comments.scss'
import likes from '../../assets/Icons/likes.svg'



const Comments = (props) => {
    return (
        <>
            <ul className='comments-list'>
                {props.commentsList.map(comments => {
                    let today = new Date(comments.timestamp);

                    let month = today.getMonth() + 1;
                    let year = today.getFullYear();
                    let day = today.getDate();
                
                    let formattedDate = month + '/' + day + '/' + year

                    return (
                    <li key={comments.name} className="comments-list__item">
                        <div className='comments-list__image'></div>
                        <div className="comments-list__box">
                            <div className="comments-list__flex">
                                <p className="comments-list__name">{comments.name}</p>
                                <p className="comments-list__time">{formattedDate}</p>
                            </div>
                            <p className="comments-list__text"> {comments.comment} </p>
                            <div className="comments-list__edit">
                                <div className="like-section">
                                    {/* <img src={likes} className="like-icon" />
                                    <p className="like-counter">0</p> */}
                                </div>
                            </div>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </>
    )
        
}

export default Comments;