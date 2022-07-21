import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';


const url = 'https://loginappapi.herokuapp.com/api/auth/userInfo';
class Header extends Component {

    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            userData: '',
            currentWeather: ''
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

    setNight = () => {
        sessionStorage.setItem('nightMode', true);
        let ele = null;
        document.getElementsByTagName('body')[0].style.backgroundColor = '#3c3c3c';
        // document.getElementById('root').style.backgroundColor = '#3c3c3c';
        ele = document.getElementsByTagName('header')[0].classList.add('header-dark');
        ele = document.getElementsByClassName('weather')[0].classList.add('weather-dark');
        ele = document.getElementsByTagName('footer')[0].classList.add('footer-dark');
        ele = document.getElementsByClassName('footer-socials')[0].classList.add('footer-socials-dark');
        ele = document.getElementsByClassName('copyright')[0].classList.add('copyright-dark');

        console.log('element food-img: ', document.getElementsByClassName('food-img'));
        // above console.log saved me.

        // NOTE: every condition in if statements, is written with utmost care.
        // for class, & id conditions are different, because getElement returns the output differently for both
        // if we are on home page
        if (this.props.match.url === '/' && document.getElementsByClassName('food-img').length > 0) {
            ele = document.getElementsByClassName('food-img');
            for (let i = 0; i < ele.length; i++) {
                console.log('adding class')
                ele[i].classList.add('food-img-dark');
            }

            ele = document.getElementsByClassName('dropdown-toggle');
            for (let i = 0; i < ele.length; i++) {
                ele[i].classList.add('dropdown-toggle-dark');
            }

            ele = document.getElementsByClassName('quick-search');
            for (let i = 0; i < ele.length; i++) {
                ele[i].classList.add('quick-search-dark');
            }

            ele = document.getElementsByClassName('quick-tile-container');
            for (let i = 0; i < ele.length; i++) {
                ele[i].classList.add('quick-tile-container-dark');
            }

            ele = document.getElementsByClassName('quick-tile-component2');
            for (let i = 0; i < ele.length; i++) {
                ele[i].classList.add('quick-tile-component2-dark');
            }
            document.getElementById('logo').classList.add('logo-dark');

        } else if (this.props.match.url.split('/')[1] === 'listing' && document.getElementById('listing-main-section')) {
            console.log('NightMode on listing page');
            document.getElementById('listing-main-section').classList.add('listing-main-section-dark');
        } else if (this.props.match.url.split('/')[1] === 'details' && document.getElementById('details-content')) {
            console.log('NightMode on details page');
            console.log(document.getElementById('details-content'))

            document.getElementById('details-content').classList.add('details-content-dark');
            document.getElementsByClassName('details-menuDisplay')[0].classList.add('details-menuDisplay-dark');
            document.getElementsByClassName('details-menu-items-head')[0].classList.add('details-menu-items-head-dark');
            document.getElementsByClassName('details-menu-items-list')[0].classList.add('details-menu-items-list-dark');
        } else if (this.props.match.url === '/login' && document.getElementsByClassName('login').length > 0) {
            console.log('NightMode on login page');
            document.getElementsByClassName('login')[0].classList.add('login-dark');
            document.getElementsByClassName('login-heading')[0].classList.add('login-heading-dark');
        } else if (this.props.match.url === '/register' && document.getElementsByClassName('register').length > 0) {
            console.log('NightMode on register page');
            console.log(document.getElementsByClassName('register'));
            document.getElementsByClassName('register')[0].classList.add('register-dark');
            document.getElementsByClassName('register-heading')[0].classList.add('register-heading-dark');
        } else if (this.props.match.url.split('/')[1] === 'placeOrder' && document.getElementsByClassName('orders-heading').length > 0) {
            console.log('NightMode on placeOrder page');
            document.getElementsByClassName('orders-heading')[0].classList.add('orders-heading-dark');
            document.getElementsByClassName('orders-form')[0].classList.add('orders-form-dark');
        } else if (this.props.match.url.split('/')[1] === 'viewBooking' && document.getElementsByClassName('view-booking-info').length > 0) {
            console.log('NightMode on viewBooking page');
            document.getElementsByClassName('view-booking-info')[0].classList.add('view-booking-info-dark');
            document.getElementsByClassName('view-booking-table')[0].classList.add('view-booking-table-dark');
        }
    }

    setDay = () => {
        sessionStorage.setItem('nightMode', false);
        let ele = null;

        document.getElementsByTagName('body')[0].style.backgroundColor = '#ffffff';
        // document.getElementById('root').style.backgroundColor = '#ffffff';
        ele = document.getElementsByTagName('header')[0].classList.remove('header-dark');
        ele = document.getElementsByClassName('weather')[0].classList.remove('weather-dark');
        ele = document.getElementsByTagName('footer')[0].classList.remove('footer-dark');
        ele = document.getElementsByClassName('footer-socials')[0].classList.remove('footer-socials-dark');
        ele = document.getElementsByClassName('copyright')[0].classList.remove('copyright-dark');

        if (this.props.match.url === '/' && document.getElementsByClassName('food-img').length > 0) {

            ele = document.getElementsByClassName('food-img');
            for (let i = 0; i < ele.length; i++) {
                ele[i].classList.remove('food-img-dark');
            }


            ele = document.getElementsByClassName('dropdown-toggle');
            for (let i = 0; i < ele.length; i++) {
                ele[i].classList.remove('dropdown-toggle-dark');
            }

            ele = document.getElementsByClassName('quick-search');
            for (let i = 0; i < ele.length; i++) {
                ele[i].classList.remove('quick-search-dark');
            }

            ele = document.getElementsByClassName('quick-tile-container');
            for (let i = 0; i < ele.length; i++) {
                ele[i].classList.remove('quick-tile-container-dark');
            }

            ele = document.getElementsByClassName('quick-tile-component2');
            for (let i = 0; i < ele.length; i++) {
                ele[i].classList.remove('quick-tile-component2-dark');
            }

            document.getElementById('logo').classList.remove('logo-dark');
        } else if (this.props.match.url.split('/')[1] === 'listing' && document.getElementById('listing-main-section')) {
            console.log('NightMode on listing page');
            document.getElementById('listing-main-section').classList.remove('listing-main-section-dark');
        } else if (this.props.match.url.split('/')[1] === 'details' && document.getElementById('details-content')) {
            console.log('NightMode on details page');
            console.log(document.getElementById('details-content'))

            document.getElementById('details-content').classList.remove('details-content-dark');
            document.getElementsByClassName('details-menuDisplay')[0].classList.remove('details-menuDisplay-dark');
            document.getElementsByClassName('details-menu-items-head')[0].classList.remove('details-menu-items-head-dark');
            document.getElementsByClassName('details-menu-items-list')[0].classList.remove('details-menu-items-list-dark');
        } else if (this.props.match.url === '/login' && document.getElementsByClassName('login').length > 0) {
            console.log('NightMode on login page');
            document.getElementsByClassName('login')[0].classList.remove('login-dark');
            document.getElementsByClassName('login-heading')[0].classList.remove('login-heading-dark');
        } else if (this.props.match.url === '/register' && document.getElementsByClassName('register').length > 0) {
            console.log('NightMode on register page');
            console.log(document.getElementsByClassName('register'));
            document.getElementsByClassName('register')[0].classList.remove('register-dark');
            document.getElementsByClassName('register-heading')[0].classList.remove('register-heading-dark');
        } else if (this.props.match.url.split('/')[1] === 'placeOrder' && document.getElementsByClassName('orders-heading').length > 0) {
            console.log('NightMode on placeOrder page');
            document.getElementsByClassName('orders-heading')[0].classList.remove('orders-heading-dark');
            document.getElementsByClassName('orders-form')[0].classList.remove('orders-form-dark');
        } else if (this.props.match.url.split('/')[1] === 'viewBooking' && document.getElementsByClassName('view-booking-info').length > 0) {
            console.log('NightMode on viewBooking page');
            document.getElementsByClassName('view-booking-info')[0].classList.remove('view-booking-info-dark');
            document.getElementsByClassName('view-booking-table')[0].classList.remove('view-booking-table-dark');
        }
    }

    // check nightMode on pageload
    checkNightModeOnPageLoad = () => {
        // check night mode status
        if (sessionStorage.getItem('nightMode') && sessionStorage.getItem('nightMode') === 'true') {
            let currentMode = document.getElementById('day-night-toggler');

            if (!currentMode) {
                console.log('returning from handleNightMode')
                return;
            }
            currentMode.classList.remove('bi-sun');
            currentMode.classList.add('bi-moon-fill');
            currentMode = 'day';

            this.setNight();
        }
    }
    // toggles day / night mode
    handleNightModeOnClick = () => {
        console.log(this.props);
        console.log('in handleNightMode')

        let currentMode = document.getElementById('day-night-toggler');
        if (!currentMode)
            return;

        if (currentMode.classList.contains('bi-sun')) {
            currentMode.classList.remove('bi-sun');
            currentMode.classList.add('bi-moon-fill');
            currentMode = 'day';
            this.setNight();
        } else {
            currentMode.classList.remove('bi-moon-fill');
            currentMode.classList.add('bi-sun');
            currentMode = 'night';
            this.setDay();
        }
    }

    getLocationAndWeather = () => {
        // set day/night icon to set
        let hour = new Date().getHours();
        // console.log('current time hours:', hour);
        if (hour >= 21 || hour <= 5) {
            let icon = document.getElementsByClassName('bi-brightness-high-fill');
            if (icon.length > 0) {
                icon[0].classList.add('bi-moon-stars-fill');
                icon[0].classList.remove('bi-brightness-high-fill');
            }
        } else {
            let icon = document.getElementsByClassName('bi-moon-stars-fill');
            if (icon.length > 0) {
                icon[0].classList.add('bi-brightness-high-fill');
                icon[0].classList.remove('bi-moon-stars-fill');
            }
        }

        // if weather is not set
        if (this.state.currentWeather === '') {
            // now ask user to give permission to access location
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.getWeather);  // this.getWeather is a callback function here
            } else {
                console.log('Geolocation is not supported by this browser.');
            }
        } else {
            // console.log('locWtr already exists', sessionStorage.getItem('locWtr'));     //    \u00B0 is code for degree symbol
        }
    }

    getWeather = (data) => {
        console.log('getting weather for : ', data);
        let latitude = data.coords.latitude;
        let longitude = data.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;

        // api calling to get weather information for user's location
        fetch(url, { method: `GET` })
            .then((res) => res.json())
            .then((data) => {
                let weatherData = data.list[0].temp.day;
                sessionStorage.setItem('locWtr', weatherData);      // saving in sessionStorage, because that allows quick fetching of data, otherwise if we fetch from state, then it takes time (at-least in this case)
                this.setState({ currentWeather: weatherData });       // due to setting the state, the component will be re-rendered hence showing the weather.
                // otherwise the page would not show weather when loaded for first time
            });
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
                <>
                    <div className="account">
                        <button onClick={this.handleLogout} className="btn" id="create-account">Logout</button>
                    </div>
                    <div className="account">
                        <Link to="/">
                            <button className="btn logged-in" id="login"><i className="bi bi-person-circle"></i> Hi {data.name}</button   >
                        </Link>
                    </div>
                    <div id="dark-mode">
                        <button onClick={this.handleNightModeOnClick}>
                            <i id="day-night-toggler" className="bi bi-sun"></i>
                            {/* <i className="bi bi-moon-fill"></i> */}
                        </button>
                    </div>
                    <div className="weather">{sessionStorage.getItem("locWtr")} C <i className="bi bi-brightness-high-fill"></i></div>
                </>
            )
        } else {
            return (
                <>
                    <div id="weather"></div>

                    <div className="account">
                        <Link to="/register">
                            <button className="btn" id="create-account">Create an Account</button>
                        </Link>
                    </div>
                    <div className="account">
                        <Link to="/login">
                            <button className="btn" id="login">Login</button>
                        </Link>
                    </div>
                    <div id="dark-mode">
                        <button onClick={this.handleNightModeOnClick}>
                            <i id="day-night-toggler" className="bi bi-sun"></i>
                            {/* <i className="bi bi-moon-fill"></i> */}
                        </button>
                    </div>
                    <div className="weather">{sessionStorage.getItem("locWtr")} C <i className="bi bi-brightness-high-fill"></i></div>
                </>
            )
        }
    }
    render() {
        // {this.checkNightMode} 
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
                    {this.checkNightModeOnPageLoad()}
                    {this.getLocationAndWeather()}
                </header>
            </>
        )
    }

    // get user info after login
    componentDidMount() {
        // set header & body according to night mode/day mode whatever is set by user already, 
        // rest things we can only set after they render. and for this we have called checkNightModeOnPageLoad() at the end in render function.
        this.checkNightModeOnPageLoad();

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
