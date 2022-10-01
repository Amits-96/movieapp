import {Link} from 'react-router-dom'
const NavBar = () => {
    return ( 
        <nav style={{maxWidth:'100%'}}>
            <Link to="/">
                <h1 style={{width:'100%'}}>MOVIE APP</h1>
                </Link>
            <div className="links">
                
                
            </div>
        </nav>
     );
}
 
export default NavBar;