import react from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { ICON_LOGO } from '../../Icons'
import Register from '../Register';

const Navbar = () => {
    return(
        <Router>
        <div>
    
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="nav-link" to="/Register">
                <ICON_LOGO styles={{fill:"rgb(29,161,242)", width:'47px', height:"30px"}}/>
                    <span className="navbar-toggler-icon"></span>
                </Link>
               
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Login <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tweets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">All Users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" >Logout</a>
                    </li>
                    </ul>
                   
                </div>
                </nav>
                <Switch>
              {/* <Route exact path='/' component={Home}></Route> */}
              <Route exact path='/Register' component={Register}></Route>
              {/* <Route exact path='/contact' component={Contact}></Route> */}
            </Switch>

        </div>
        </Router>
    );
}

export default Navbar;