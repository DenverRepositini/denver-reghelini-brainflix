import './Comments.scss'

const Comments = (props) => {
    return (
        <>
            <ul>
                {props.commentsList.map(comments => {
                    return (
                    <li key={comments.id} className="comments-list__item">
                        <div className='comments-list__image'></div>
                        <div className="comments-list__box">
                            <div className="comments-list__flex">
                                <p className="comments-list__name">{comments.name}</p>
                                <p className="comments-list__time">{comments.timestamp}</p>
                            </div>
                            <p className="comments-list__text"> {comments.comment} </p>
                            <div className="comments-list__edit">
                                <div className="like-section">
                                    <img src="./Assets/icons/icon-like.svg" className="like-icon" />
                                    <p className="like-counter">0</p>
                                </div>
                                <img src="./Assets/icons/icon-delete.svg" className="delete" />
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