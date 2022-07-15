import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import './Header.css';


const url = 'https://loginappapi.herokuapp.com/api/auth/userInfo';
class Header extends Component {

    constructor() {
        super();

        this.state = {
            userData: '',
        }
    }

    handleLogout = () => {
        // clear all information of user
        sessionStorage.removeItem('userInfo');
        sessionStorage.removeItem('ltk');
        sessionStorage.setItem('loginStatus', false);

        // route the user back to home page
        this.props.history.push('/');       // ensure to export the header withRouter because it is a child component, to use default props we need to import withRouter,  & export too.
    }

    conditionalHeader = () => {
        if (sessionStorage.getItem('ltk')) {
            // if the login token exists, that means user is logged in
            let data = this.state.userData;

            let outArray = [data.name, data.email, data.phone, data.role];
            // save user data (will use to fill the checkout page form details automatically)
            sessionStorage.setItem('userInfo', outArray);

            // save the loginStatus of user as true 
            // we will use it to check if the user is logged in, whenever required.
            sessionStorage.setItem('loginStatus', true);

            return (
                <div id="account">
                    <Link to="/">
                        <button className="btn" id="login"><i class="bi bi-person-circle"></i> Hi {data.name}</button   >
                    </Link>
                    <button onClick={this.handleLogout} className="btn" id="create-account">Logout</button>
                </div>
            )
        }
        return (
            <div id="account">
                <Link to="/login">
                    <button className="btn" id="login">Login</button>
                </Link>
                <Link to="/register">
                    <button className="btn" id="create-account">Create an Account</button>
                </Link>
            </div>
        )
    }
    render() {
        return (
            <>
                {/* add light / dark mode later */}
                <header>
                    <Link to="/">
                        <div id="icon">
                            <p>e!</p>
                        </div>
                    </Link>
                    {this.conditionalHeader()}
                </header>
            </>
        )
    }

    // get user info after login
    componentDidMount() {
        // get the user information using the login token (from sessionStorage)
        // it was saved when user logged in (in login.js)
        fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': sessionStorage.getItem('ltk')
            }
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ userData: data })
            })
    }
}

export default withRouter(Header);

// <header>
//     {/* <!-- navigation bar start--> */}
//     <nav className="navbar background-orange navbar-expand-sm navbar-dark py-0">
//         {/* <!-- Ensure full width cover --> */}
//         <div className="container-fluid py-0">
//             {/* <!-- give icon logo text --> */}
//             <Link to="/" className="navbar-brand icon py-0">Zomato</Link>
//             {/* <!-- now collapsible navbar toggler button --> */}
//             <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
//                 data-bs-target="#collapsibleNavbar">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             {/* <!-- collapsible navbar items --> */}
//             <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
//                 <ul className="navbar-nav">
//                     {/* <!-- dark mode button --> */}
//                     <li className="nav-item">

//                         <Link to="/" className="nav-link" id="night-button" href="#">
//                             {/*onClick="ToggleDarkMode()" */}
//                             <i className="bi bi-brightness-high" style={{ fontSize: '2.2vw', color: 'black' }}></i>
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
//                             <img className="navbar-img" src="https://i.ibb.co/kG506zF/facebook.png" alt="Facebook" title="Facebook" />
//                         </a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="https://www.instagram.com/my_emerging_thoughts/" target="_blank" rel="noreferrer">
//                             <img className="navbar-img" src="https://i.ibb.co/zR2VV2R/insta.png" alt="Instagram" title="Instagram" />
//                         </a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
//                             <img className="navbar-img" src="https://i.ibb.co/cLM7wSf/youtube1.png" alt="YouTube" title="YouTube" />
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
// </header>