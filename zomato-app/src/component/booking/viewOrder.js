import React, { Component } from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';
import Header from '../../header';

const url = 'https://app1api.herokuapp.com/orders';
const updateUrl = 'https://app1api.herokuapp.com/updateOrder';

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
                            Login First to View Order
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
        if (!sessionStorage.getItem('loginStatus') || sessionStorage.getItem('loginStatus') === 'false') {
            // if user is not logged in then nothing to fetch from api
            return;
        }

        if(this.props.location) {
            // in the url of viewOrder, we get the data of payment (we are redirected from there to this page with that data), 
            // that data can be accessed via queryparams (from this.props.location.search)
            let queryp = this.props.location.search;
            if(queryp) {

                // fetch the status, date, & bank_name from queryparams data
                let data = {
                    "status":queryp.split('&')[0].split('=')[1],
                    "date":queryp.split('&')[2].split('=')[1],
                    "bank_name":queryp.split('&')[3].split('=')[1]
                }
                // fetch the orderId
                let id = queryp.split('&')[1].split('=')[1].split('_')[1];

                console.log('>> this.props.location.search (queryparams): ', queryp);
                console.log('>> fetched data from queryparams: ', data);

                // update this order details with the status, date, & bank_name (in database)
                fetch(`${updateUrl}/${id}`,{
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })

                // after this check commit number 9 in suraj-singh12/zomato-api : updated a key in /updateOrder/:id to match the data in database
                // commit SHA: 7a9a0f96c6fc4a5e2b44786258e53a62f3d0ef39

                // there the /updateOrder/:id was updating things based on `orderId`,
                // but in our data we don't have anything of this name,
                // instead we have this orderId by the name `id`
                // so updated the key (word) there & then things worked.

            }
        }


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