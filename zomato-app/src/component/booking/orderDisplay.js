import React from 'react';
import './orderDisplay.css';

const OrderDisplay = (props) => {
    console.log(props);

    const renderTable = ({orderData}) => {
        if(orderData) {
            // console.log(orderData);
            return orderData.map((item) => {
                return (
                    <tr key={item._id}>
                        <td>{item.id}</td>
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
            <center style={{marginTop: '2%'}}><h2>Orders</h2></center>
            <table className="table view-booking-table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Restaurant Name</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>BankName</th>
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