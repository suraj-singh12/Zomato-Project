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

    // calling api to get all orders information
    componentDidMount() {
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