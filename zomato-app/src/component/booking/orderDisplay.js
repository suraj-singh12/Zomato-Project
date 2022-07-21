import React from 'react';
import './orderDisplay.css';

const OrderDisplay = (props) => {
    console.log(props);

    const renderTable = ({orderData}) => {
        if(orderData) {
            // console.log(orderData);
            return orderData.map((item) => {
                if(item.date) {
                    item.date = item.date.split('%')[0];
                }
                if(item.bank_name)
                    item.bank_name = item.bank_name.split('%20').join(' ');

                return (
                    <tr key={item._id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>Rs. {item.cost}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        <td>{item.bank_name}</td>
                    </tr>
                )
            })
        }
    }

    return (
        <div className="container view-booking-info">
            <center><h2>Orders</h2></center>
            <table className="table view-booking-table">
                <thead>
                    <tr>
                        <th scope="col">OrderId</th>
                        <th scope="col">Restaurant Name</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">BankName</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
        </table>
        </div >
    )
}

export default OrderDisplay;