import React, { Component } from 'react';
import Header from '../../header';
import './loginSignup.css';
/* we will need to call header in each parent component now,
   so it will be child component of all Parent components.

   This is required so that updated header can be displayed,
   if and when the user does logins or logouts the header 
   needs to be re-rendered instantly.
*/

const url = "https://loginappapi.herokuapp.com/api/auth/login";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: 'testuser@gmail.com',
            password: 'testuser',
            message: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        // console.log(event.target.value);
        // automatically gets changed as:-   name: event.target.value, email: event.target.value, so on & updates the correct state.
        // this is how we manage multiple input boxes in one go.

        // here since we know the event.target.name of each element is same as its name in state object
        // so here it automatically sets the state using that name
        //  so we are basically using the same names to our advantage.
    }

    handleSubmit = (event) => {
        event.preventDefault();     // stop page from reloading (due to form submit)
        // here will make a call to api, to register the user.
        fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((res) => res.json())
            .then((data) => {
                // if email is not registered, or password is incorrect, then set the error message to display.
                // console.log('data: ', data)
                if (data.auth === false) {
                    this.setState({ message: data.token });
                } else {
                    // user is a registered user, & password is correct then proceed, login him,
                    // and save the token we get from api, which allows accessing user info to us, 
                    // for a limited time period (set in the API code) after which token becomes invalid.

                    // save the token 
                    sessionStorage.setItem('ltk', data.token);
                    // ltk: login token


                    this.props.history.push(sessionStorage.getItem('last_page'));   // redirect user to his last visited page on website.
                }
            })
    }


    render() {
        return (
            <>
                <Header />
                <form className="container-fluid" style={{ marginTop: '2%', marginBottom: '2%' }} onSubmit={this.handleSubmit}>
                    <div className="container login" style={{ border: '1px solid lightblue', padding: '0', borderRadius: '10px' }}>
                        <h2 className="login-heading" style={{ backgroundColor: 'lightgreen', textAlign: 'center', padding: '1%', color: 'white', borderRadius: '10px 10px 0 0' }}>
                            Login
                        </h2>
                        <h2 className="message" style={{ color: "red", textAlign: 'center' }}>{this.state.message}</h2>

                        <div className="row" style={{ padding: '1%' }}>

                            <div className="col-md-6">
                                <label className="form-label" htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" className="form-control"
                                    value={this.state.email} onChange={this.handleChange} required />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label" htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" className="form-control"
                                    value={this.state.password} onChange={this.handleChange} required />
                            </div>

                        </div>
                        <div className="row text-center" style={{ padding: '1%' }}>
                            <button className="login-button col-md-2 btn btn-warning" type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default Login;