import React, { Component } from 'react';

class MenuDisplay extends Component {

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
                            <button className="btn btn-success">
                                <span className="bi bi-plus"></span>
                            </button>
                            &nbsp;
                            <button className="btn btn-danger">
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
                    <span>Item Number</span>
                </div>
                <div className="col-md-12 bg-info details-menu-items-down">
                    {this.renderMenu(this.props)}
                </div>
            </div>
        )
    }
}

export default MenuDisplay;