import React, { Component } from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';
import Header from '../../header';

const url = 'https://app1api.herokuapp.com/orders';

class ViewOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: ''
        }
    }

    render() {
        // in sessionStorage everything is stored in the form of string, so even we set boolean false when user is not logged in, 
        // but in sessionStorage it is stored as a string. So compare with string false.

        // for loginStatus to be present in sessionStorage, atleast one user must have logged in and then logged out before.
        // so if no user has logged in & we come on this page, then sessionStorage.getItem('loginStatus') will be null.
        // !sessionStorage.getItem('loginStatus') will take care of this case.
        // and sessionStorage.getItem('loginStatus') === 'false' will take care of other normal cases.

        console.log('loginStatus: ', sessionStorage.getItem('loginStatus'));
        if (!sessionStorage.getItem('loginStatus') || sessionStorage.getItem('loginStatus') === 'false') {
            /* if the user is not logged in then we don't want him to reach this page,
             * because only a logged in user can make an order */

            console.log('inside if: ')
            return (
                <>
                    <Header />
                    <div className="container" style={{ textAlign: 'center', padding: '2%', color: 'blue' }}>
                        <h3>
                            Login First to Place Order
                        </h3>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <Header />
                    <OrderDisplay orderData={this.state.orders} />
                </>
            )
        }
    }

    // wait function
    timeout = (delay) => {
        return new Promise(res => setTimeout(res, delay));
    }

    // calling api to get all orders information
    async componentDidMount() {

        await this.timeout(500);      // wait for 0.5 seconds
        // because this component (viewOrder.js) is called just after the post api
        // that posted the user orders in the database in placeOrder.js
        // & before that api could finish up doing the job, we call the below api,
        // this leads to rendering of old data from database.
        // to avoid this, we wait for 0.5 second, and then call the api.
        // this ensures we give ample time between both calls & updated data is received.

        // getting all orders from api
        // axios.get(url, { method: 'GET' })
        //     .then((res) => {
        //         this.setState({ orders: res.data });
        //     })

        // get only current user's orders from API
        let email = sessionStorage.getItem('userInfo').split(',')[1];
        console.log('info: ', sessionStorage.getItem('userInfo'));
        console.log(`${url}?email=${email}`);

        axios.get(`${url}?email=${email}`)
            .then((res) => {
                this.setState({ orders: res.data });
            })

        // fetch(url, {method: 'GET'})
        // .then((res) => res.json()) 
        // .then((data) => {
        //     this.setState({orders: data});
        // })
    }
}

export default ViewOrder;