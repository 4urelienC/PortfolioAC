import { Link } from 'react-router-dom'
import borderTitle from '../../assets/Border-Title.png';

function Header() {
    return (
    <header>
        <div className="my-frame-Title">
            <Link to="/">
                <h1>AURELIEN CHEVALIER</h1>
            </Link>
        </div>
        <img src={borderTitle} alt="border" className="border-overlay-title"/>
    </header>
    )
}

export default Header