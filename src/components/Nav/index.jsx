import { Link } from 'react-router-dom'
import LogoCSS from '../../assets/Logo_CSS.png';
import LogoHTML from '../../assets/Logo_HTML.png';
import LogoJS from '../../assets/Logo_JS.png';
import LogoNode from '../../assets/Logo_nodeJS.png';
import LogoReact from '../../assets/Logo_ReactJS.png';

import borderNav from '../../assets/Border-Nav.png';

function Nav() {
    return (
    <div>
        <img src={borderNav} alt="border" className="border-overlay-nav"/>
        <nav className="my-frame-Nav">
            <Link to="/survey">
                <img src={LogoHTML} alt="HTML" />
                HTML 5
            </Link>
            <Link to="/survey">
                <img src={LogoCSS} alt="CSS" />
                CSS 3
            </Link>
            <Link to="/survey">
                <img src={LogoJS} alt="Logo JS" />
                JAVA SCRIPT
            </Link>
            <Link to="/survey">
                <img src={LogoNode} alt="node JS" />
                Node JS
            </Link>
            <Link to="/survey">
                <img src={LogoReact} alt="React JS" />
                React JS
            </Link>
        </nav>
    </div>
    )
}

export default Nav