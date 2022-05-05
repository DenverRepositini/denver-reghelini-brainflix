import './Header.scss'
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import icon from '../../assets/Images/Mohan-muruge.jpg'

const Header = () => {
    return (
        <div className="header">
            <div className='logo'>
                <img className='logo__image' src= {logo} alt="" />
            </div>
            <div className='search'>
                <input type="search" className='search__input' placeholder='Search' />
                <img src={icon} className='search__icon' alt="" />
            </div>
            <div className='button'>
                <button className='button__item'>UPLOAD</button>
            </div>
        </div>
    );
}

export default Header;