import { Link } from 'react-router-dom'
import LogoCSS from '../../assets/Logo_CSS.webp';
import LogoHTML from '../../assets/Logo_HTML.webp';
import LogoJS from '../../assets/Logo_JS.webp';
import LogoNode from '../../assets/Logo_nodeJS.webp';
import LogoReact from '../../assets/Logo_ReactJS.webp';

import borderNav from '../../assets/Border-Nav.webp';

function Nav() {
    return (
    <div>
        <img src={borderNav} alt="border" className="border-overlay-nav"/>
        <nav className="my-frame-Nav">
            <Link to="/html">
                <img src={LogoHTML} alt="HTML" />
                HTML 5
            </Link>
            <Link to="/css">
                <img src={LogoCSS} alt="CSS" />
                CSS 3
            </Link>
            <Link to="/javaS" className='JS_Max'>
                <img src={LogoJS} alt="Logo JS" />
                JAVA SCRIPT
            </Link>
            <Link to="/javaS" className='JS_Min'>
                <img src={LogoJS} alt="Logo JS" />
                JS
            </Link>
            <Link to="/nodeJS">
                <img src={LogoNode} alt="node JS" />
                Node JS
            </Link>
            <Link to="/reactJS">
                <img src={LogoReact} alt="React JS" />
                React JS
            </Link>
        </nav>
    </div>
    )
}

export default Nav