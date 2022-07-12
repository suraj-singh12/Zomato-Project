import React from 'react';

const OrderDisplay = (props) => {
    console.log(props);
    const renderTable = ({orderData}) => {
        if(orderData) {
            console.log(orderData);
            return orderData.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>Rs. {item.cost}</td>
                    </tr>
                )
            })
        }
    }

    return (
        <div className="container">
            <center><h2>Orders</h2></center>
            <table className="table">
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