import './NewComment.scss'
import pic from  '../../assets/Images/Mohan-muruge.jpg';

const NewComment = () => {
    return (
        <>
            <div className='form'>
                <div>
                     <img src={pic} className="form__image"  alt="Mohan Muruge" />
                </div>
                <div>
                    <div>
                        <label className='input-label' htmlFor="comment">JOIN THE CONVERSATION</label>
                        <input id='comment' type="text" className='input-box' placeholder=' Add a new comment' />
                    </div>
                    <div>
                        <button className='input-button'>COMMENT</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewComment;