import React, { Component } from 'react';
import './placeOrder.css';
import Header from '../../header';

// will use to show the images of selected items 
const url = 'https://app1api.herokuapp.com/menuItem';
const purl = 'https://app1api.herokuapp.com/placeOrder';

class PlaceOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: Math.floor(Math.random() * 100000),
            hotel_name: this.props.match.params.restName,
            name: sessionStorage.getItem('userInfo') ? sessionStorage.getItem('userInfo').split(',')[0] : '',
            email: sessionStorage.getItem('userInfo') ? sessionStorage.getItem('userInfo').split(',')[1] : '',
            cost: 0,
            phone: sessionStorage.getItem('userInfo') ? sessionStorage.getItem('userInfo').split(',')[2] : '',
            address: 'H No26',
            menuItem: ''
        }
    }

    checkout = () => {
        if (!this.state.cost) {
            console.log('cost is : NaN');
            alert('Cannot place an empty order! Please select atleast one item.');
            return;
        }
        // here will make a call to api, to insert order details in database.
        // we only need item ids instead of full data of them

        let obj = this.state;
        // in sessionStorage 'menu' we only have the ids of the items user selected on details page.
        obj.menuItem = sessionStorage.getItem('menu');
        // now we have orderIds only, in menuItem, which makes it easy to make api call now.

        // remove items present in cart of this restaurant from sessionStorage
        // let restaurant = sessionStorage.getItem('last_page').charAt(sessionStorage.getItem('last_page').length - 1);
        // if(sessionStorage.getItem('restOfMenu') === restaurant) {

        // no need of above checks, because sessionStorage's restOfMenu gets updated as soon we come on checkout page, & menu also
        // so cart always represents items of the restaurant where we are currently going to place order. 
        sessionStorage.removeItem('restOfMenu');
        sessionStorage.removeItem('menu');
        console.log('>>> Items erased from cart.')

        // }

        fetch(purl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
            // pushed the details of order by this user, into database.
        })
        // .then(this.props.history.push('/viewBooking')); // not redirecting to viewBooking page, after pushing order details in database.
        // after hitting Place Order button on checkout page, I can view 
        // the data pushed to my database here: https://app1api.herokuapp.com/orders

        // after this, the user goes for payment, and from there he will be redirected to the /viewOrder page automatically.
        /*
         in my suraj-singh12/pay-with-paytm repository (paytm payment one) check the commits: 
         1.    changed /callback's redirection url (i.e. url to redirect after payment complete) to my app running 
on localhost
        2.     orderId will be fetched from my application (form that we submit on checkout page), if not found in 
that only then use custom id (which will happen when not running this payment gateway via application)

            These were the next things that I did, to make the application work as intended.
            now the orderId in payment, will be same as our orderId here.
            so now we can easily update the order (with status, date etc in database) via that information directly
            using orderId itself.
        */

    }

    renderItem = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <div className="order-items" style={{ marginRight: '3%', width: '250px', height: '350px', float: 'left', boxShadow: '1px 1px 8px 2px orange', borderRadius: '2%' }} key={item.menu_id}>
                        <img src={item.menu_image} style={{ height: '250px', width: '99.8%', borderRadius: '2%' }} alt={item.menu_name} />
                        <h4>{item.menu_name}</h4>
                        <h4>Rs. {item.menu_price}</h4>
                    </div>
                )
            })
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        // automatically gets changed as:-   name: event.target.value, email: event.target.value, so on & updates the correct state.
        // this is how we manage multiple input boxes in one go.

        // here since we know the event.target.name of each element is same as its name in state object
        // so here it automatically sets the state using that name
        //  so we are basically using the same names to our advantage.
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
                    {/* // note it is important to have the name= field of all the below items same as in the state name
                        // because we use this for advantage in handleChange() */}
                    <div className="container-fluid" style={{ marginTop: '2%', marginBottom: '2%' }}>
                        <div className="container" style={{ border: '1px solid lightblue', padding: '0', borderRadius: '10px' }}>
                            <h2 style={{ backgroundColor: 'lightBlue', textAlign: 'center', padding: '1%', color: 'white', borderRadius: '10px 10px 0 0' }}>
                                Your order for {this.state.hotel_name}
                            </h2>
                            {/* form: below form on clicking submit button will first save the order details in database,
                            & redirect the user to payment gateway*/}
                            <form action="https://pay-with-paytm.herokuapp.com/paynow" method="POST">
                                <input type="hidden" name="cost" value={this.state.cost} />
                                <input type="hidden" name="id" value={this.state.id} />
                                <input type="hidden" name="hotel_name" value={this.state.hotel_name} />

                                <div className="row" style={{ padding: '1%' }}>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="fname">Name:
                                            <input type="text" id="fname" name="name" className="form-control"
                                                value={this.state.name} onChange={this.handleChange} />
                                        </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="email">Email:
                                            <input type="email" id="email" name="email" className="form-control"
                                                value={this.state.email} onChange={this.handleChange} />
                                        </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="phone">Phone:
                                            <input type="number" id="phone" name="phone" className="form-control"
                                                value={this.state.phone} onChange={this.handleChange} />
                                        </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="address">Address:
                                            <input type="text" id="address" name="address" className="form-control"
                                                value={this.state.address} onChange={this.handleChange} />
                                        </label>
                                    </div>
                                </div>

                                {/* render Items that user had selected */}
                                <div className="container" style={{ display: 'inline-block', textAlign: 'center' }}>
                                    {this.renderItem(this.state.menuItem)}
                                </div>

                                <div className="row" style={{ margin: '2%' }}>
                                    <div className="col-md-9">
                                        <h3>Total Price is: {this.state.cost}</h3>
                                    </div>
                                    <button className="btn btn-success col-md-2" type="submit" onClick={this.checkout}>Place Order</button>
                                </div>
                            </form>
                        </div>
                        <hr />
                    </div>
                </>
            )
        }
    }

    // call api & get the details of the menu that user has selected.
    componentDidMount = () => {
        // we had saved the menu item id's in restDetails.js (i.e. previous / details page before leaving it to come on this page)
        // so get menuItems from sessionStorage (it will give a string where values are separated by commas)
        let menuItem = sessionStorage.getItem('menu');
        let orderId = [];
        // since menuItem is a string, we need to split it & parse ids in it as numbers into orderId array
        if (menuItem) {
            menuItem.split(',').map((item) => {
                orderId.push(parseInt(item));
                // returning ok, because we have nothing to return, 
                // but need to return something so that the function does not show any warning, 
                // so returning ok
                return 'ok';
            });
        }
        console.log(orderId);

        // now we have all order ids in number array orderId

        // call the api now (with post method)
        // we will post the orderIds & fetch the details of them
        fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderId)
            // passing data inside body
        })
            .then((res) => res.json())
            .then((data) => {
                // we will get data of all the items that user has selected.
                console.log("from placeOrder.js: ", data);
                // after looking at the structure of output, now getting the total sum of costs of all items
                let totalPrice = 0;
                data.map((item) => {
                    totalPrice = totalPrice + parseFloat(item.menu_price);
                    return 'ok';    // since we have nothing to return  (same logic as previous map)
                })

                // update the states
                this.setState({ menuItem: data, cost: totalPrice });
            })
    }
}

export default PlaceOrder;