import React, { Component } from 'react';

class MenuDisplay extends Component {

    // not making 'orderId' a state, because it would otherwise lead to 
    // re-rendering of page on every addition/subtraction, which we don't want.
    orderId = [];

    placeOrder = (id) => {
        this.orderId.push(id);
        this.props.finalOrder(this.orderId);  // this will be received by the parent component (in restDetails) 
        // and there our finalOrder function calls the addToCart function, which updates the userItem state
    }

    removeOrder = (id) => {
        /**
         * remove the item from the order list
         * index = a.indexOf(id)
         * a.splice(index, howMany)
         * 
         * combining: a.splice(a.indexOf(id), 1);
         * but we need to check first, if indexOf(id) > -1, 
         * otherwise, we may accidentally remove the last item (indx: -1) from the list
         */
        if(this.orderId.indexOf(id) > -1) {
            this.orderId.splice(this.orderId.indexOf(id), 1);

            this.props.finalOrder(this.orderId);  // this will be received by the parent component (in restDetails) 
            // and there our finalOrder function calls the addToCart function, which updates the userItem state
        }
    }

    renderCart = (orders) => {
        if(orders) {
            return orders.map((item, index) => {
                return (
                    <b key={index}>{item} &nbsp;</b>
                )
            })
        }
    }
    
    renderMenu = ({ menudata }) => {
        if (menudata) {
            return menudata.map((item) => {
                return (
                    <div className="row" key={item._id}>
                        <div className="col-md-8">
                            <b>{item.menu_id}</b>
                            <img src={item.menu_image} style={{ height: '80px', width: '80px' }} alt="menuItem" />
                            {item.menu_name} - Rs. {item.menu_price}
                        </div>

                        <div className="col-md-4">
                            <button className="btn btn-success" onClick={() => {this.placeOrder(item.menu_id)}}>  {/* add item on clicking + button */}
                                <span className="bi bi-plus"></span>
                            </button>
                            &nbsp;
                            <button className="btn btn-danger" onClick={() => {this.removeOrder(item.menu_id)}}>   {/* remove item on clicking + button */}
                                <span className="bi bi-dash"></span>
                            </button>
                        </div>
                    </div>
                )
            })
        }
    };

    render() {
        return (
            <div class="container">
                <div className="col-md-12 bg-success details-menu-items-down">
                    <h1>Item Added</h1>
                    <span>Item Number {this.renderCart(this.orderId)} Added</span>
                </div>
                <div className="col-md-12 bg-info details-menu-items-down">
                    {this.renderMenu(this.props)}
                </div>
            </div>
        )
    }
}

export default MenuDisplay;