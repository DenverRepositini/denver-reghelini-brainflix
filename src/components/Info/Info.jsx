import './Info.scss'
import data from '../../Data/video-details.json'
import views from '../../assets/Icons/views.svg'
import likes from '../../assets/Icons/likes.svg'


let today = new Date(data[0].timestamp);

let month = today.getMonth() + 1;
let year = today.getFullYear();
let date = today.getDate();

const Info = () => {
    return (
        <div>
            <div>
                    {data[0].title}
            </div>
            <div>
                <div>
                    <p>
                        {data[0].channel}
                    </p>
                    <p>
                        {month + '/' + date + '/' + year}
                    </p>
                </div>
                <div>
                    <p>
                        <img src={views} alt="" />{data[0].views}
                    </p> 
                    <p>
                        <img src={likes} alt="" />{data[0].likes}
                    </p>
                </div>
            </div>
            <div>
                <p>
                  {data[0].description}
                 </p>
            </div>
        </div>
    );
}

export default Info;