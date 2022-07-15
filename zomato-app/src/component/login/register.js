import React, { Component } from 'react';
import Header from '../../header';

/* we will need to call header in each parent component now,
   so it will be child component of all Parent components.

   This is required so that updated header can be displayed,
   if and when the user does logins or logouts the header 
   needs to be re-rendered instantly.
*/

const url = 'https://loginappapi.herokuapp.com/api/auth/register';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            phone: ''
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

    handleSubmit = () => {
        // here will make a call to api, to register the user.
        fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
            // pushed the details of user, into database.
        })
            .then(this.props.history.push('/login')); // redirecting to login, after user is registered.
        // for dev purpose, all registered users can be seen here: https://loginappapi.herokuapp.com/api/auth/users 
    }

    render() {
        return (
            <>
                <Header />
                <form className="container-fluid" style={{ marginTop: '2%', marginBottom: '2%' }} onSubmit={this.handleSubmit}>
                    <div className="container" style={{ border: '1px solid lightblue', padding: '0', borderRadius: '10px' }}>
                        <h2 style={{ backgroundColor: 'lightBlue', textAlign: 'center', padding: '1%', color: 'white', borderRadius: '10px 10px 0 0' }}>
                            Register
                        </h2>
                        <div className="row" style={{ padding: '1%' }}>
                            <div className="col-md-6">
                                <label className="form-label" htmlFor="fname">Name:</label>
                                <input type="text" id="fname" name="name" className="form-control"
                                    value={this.state.name} onChange={this.handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label" htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" className="form-control"
                                    value={this.state.email} onChange={this.handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label" htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" className="form-control"
                                    value={this.state.address} onChange={this.handleChange} required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label" htmlFor="phone">Phone:</label>
                                <input type="phone" id="phone" name="phone" className="form-control"
                                    value={this.state.phone} onChange={this.handleChange} required />
                            </div>
                        </div>
                        <button className="btn btn-success" type="submit" style={{ margin: "2% 90%" }}>Register</button>
                    </div>
                </form>
            </>
        )
    }
}

export default Register;