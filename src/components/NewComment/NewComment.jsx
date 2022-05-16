import './NewComment.scss'
import pic from  '../../assets/Images/Mohan-muruge.jpg';

const NewComment = () => {
    return (
        <>
            <div className='form'>
                <div className='form__box1' >
                     <img src={pic} className="form__box1__image"  alt="Mohan Muruge" />
                </div>
                <div className='form__box2' >
                    <div className='form__box2__input'>
                        <label className='input-label' htmlFor="comment">JOIN THE CONVERSATION</label>
                        <input id='comment' type="text" className='input-box' placeholder=' Add a new comment' />
                    </div>
                    <div className='form__box2__button'>
                        <button className='input-button'>COMMENT</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewComment;