import './Header.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import icon from '../../assets/Images/Mohan-muruge.jpg';
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className='logo'>
               <Link to='/'><img className='logo__image' src= {logo} alt="" /></Link>
            </div>
            <div className='search'>
                <input type="search" className='search__input' placeholder='Search' />
                <img src={icon} className='search__icon' alt="" />
            </div>
            <div className='button'>
                <Link className='button__link' to='/upload'><button className='button__item'>UPLOAD</button></Link>
                <img src={icon} className='search__icon--tablet' alt="" />
            </div>
        </div>
    );
}

export default Header;