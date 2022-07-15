import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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

            /*
                    let outArray = [data.name, data.email, data.phone, data.role];
                    // save user data (will use to fill the checkout page form details automatically)
                    sessionStorage.setItem('userInfo', outArray);
            */

            /* when we reach viewOrder/viewBooking, we try to fetch the userInfo from session storage,
            but that information is set in header, every time, since on each page, header is mounted again.

            then when header is just mounted & rendered , it set the session storage (due to render calling the conditionalHeader())
            and at this time we have no data in this.state.userData, so whatever that is in sessionStorage's userInfo gets replaced by empty, empty, empty i.e. (,,,) three commas with no data in between


            then componentDidMount() gets invoked, as header is mounted here, then api gets called,
            we fetch the user information, and set this.state.userData.
            due to state change, the component (header) re-renders, and conditionalHeader() is called again inside render()
            then this time updated information is saved in sessionStorage's userInfo.
            After this time, anyone can fetch the data of sessionStorage's userInfo
            i.e. after the header is fully mounted.

            but on viewOrder/viewBooking page, we fetch sessionStorage.getItem('userInfo') before the header's  componentDidMount() is called,
            i.e. in between when the header is loading, so we get (,,,) three commas and no data (i.e.  data before header's api call)

            if we try to fetch sessionStorage.getItem('userInfo') anywhere outside componentDidMount(), then we would the correct updated data for sure,
            but we call it inside the componentDidMount() of Parent Component (viewOrder/viewBooking), so that's why we get such partial & intermediate results (,,,)


            so to fix this issue, I am commenting out the above lines which are setting the userInfo in sessionStorage
            and writing an if condition, so sessionStorage is only updated once after userLogin, 
            and whenever the header is mounted again on a new component, it doesn't touch the userInfo neither before api call, nor after api call (also we know this userInfo does not change in any re-render/ mounting after login)

            on logout, the handleLogout() erases the information safely.

            remember: when a component is mounted for first time then this happens: 
                    (constructor()->render()->componentDidMount())
            (and we are mounting our header in each parent component, that means header is mounted in each parent component when the parent component mounts.)
            (so when parent component loads for first time, header is mounted once, (after that it is re-rendered in that component, till the time that component remains mounted ))

            */

            /*
                if !sessionStorage.getItem('userInfo') 
                    : this condition allows to set the userInfo after login, for first time only (i.e. first render() after login)
                
                if sessionStorage.getItem('userInfo').length < 4  
                    : this allows the updated api data, to set the userInfo for the first time only (ie. first componentDidMount() after login)

                after this userInfo is never touched even, until user logs out.

                flow: 
                Login Success -> redirected to home page -> header mount on home page
                Header:-> constructor() -> render() [-> conditionalHeader() : this time if !sessionStorage.getItem('userInfo')  is true, and userInfo set to ,,, (since userData is empty)]
                -> componentDidMount [->api call -> userData updated]
                -> re-render(due to state change of userData) [-> conditionalHeader() : this time if sessionStorage.getItem('userInfo').length < 4  is true (because userInfo is  ,,,   i.e. length is 3, ie. < 4)
                   so userItem updated as per updated userData

                Note: 
                Now userItem exists in sessionStorage, so  if !sessionStorage.getItem('userInfo')  condition will never become true in any re-render or mounting of header on any page
                and userItem length is > 4, so `if sessionStorage.getItem('userInfo').length < 4 `  condition will never become true in any re-render or mounting of header on any page

                so userInfo is never touched till user LogOut, after this when another user or same user LogIn, then again same cycle repeats,
                i.e. userInfo is updated only after login (render, componentDidMount()->re-render()), and then never till logOut. 

            */
            if (!sessionStorage.getItem('userInfo') || sessionStorage.getItem('userInfo').length < 4) {
                let outArray = [data.name, data.email, data.phone, data.role];
                // save user data (will use to fill the checkout page form details automatically)
                sessionStorage.setItem('userInfo', outArray);
            }

            // save the loginStatus of user as true 
            // we will use it to check if the user is logged in, whenever required.
            sessionStorage.setItem('loginStatus', true);

            return (
                <div id="account">
                    <Link to="/">
                        <button className="btn" id="login"><i className="bi bi-person-circle"></i> Hi {data.name}</button   >
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