import Logo from "../images/logo.svg";
import {pageLinks, socialLinks} from "../data";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">

                <div className="nav-header">
                    <img src={Logo} className="nav-logo" alt="backroads"/>
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <ul className="nav-links" id="nav-links">
                    {pageLinks.map((link) => {
                        const {id, href, text} = link
                        return <li key={id}><a href={href} rel="noreferrer" className="nav-link">{text}</a></li>
                    })}
                </ul>

                <ul className="nav-icons">
                    {socialLinks.map((link) => {
                        const {id, href, icon} = link
                        return <li key={id}><a href={href} rel="noreferrer" target="_blank" className="nav-icon"><i className={icon}></i></a></li>
                    })}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
