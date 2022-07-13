import React, {Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';

const url='https://app1api.herokuapp.com/orders';

class ViewOrder extends Component {
    constructor(props) {
        super(props);

        this.state={
            orders:''
        }
    }

    render() {
        return (
            <OrderDisplay orderData={this.state.orders} />
        )
    }

    // wait function
    timeout = (delay) => {
        return new Promise( res => setTimeout(res, delay) );
    }

    // calling api to get all orders information
    async componentDidMount() {

        await this.timeout(1000);      // wait for 5 seconds
        // because this component (viewOrder.js) is called just after the post api
        // that posted the user orders in the database in placeOrder.js
        // & before that api could finish up doing the job, we call the below api,
        // this leads to rendering of old data from database.
        // to avoid this, we wait for 1 second, and then call the api.
        // this ensures we give ample time between both calls & updated data is received.

        // getting all orders from api
        axios.get(url, {method: 'GET'})
        .then((res) => {
            this.setState({orders: res.data});
        })
        // fetch(url, {method: 'GET'})
        // .then((res) => res.json()) 
        // .then((data) => {
        //     this.setState({orders: data});
        // })
    }
}

export default ViewOrder;