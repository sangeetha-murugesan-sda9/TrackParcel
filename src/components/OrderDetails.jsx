import React, { Component } from "react";
import moment from "moment";
import "../styles/style.css";
import { Link } from "react-router-dom";

export default function DisplayOrders(props) {
  const [listData, setListData] = React.useState([]);

  React.useEffect(() => {
    console.log(props.location);
    setListData(props.location.state);
  });

  return (
    <div>
      <div class="data">
        <Link className="button" to="/">
          Back to home
        </Link>
        <h4>📦 Parcel Express </h4>
        <label>📦 Order Details</label>
      </div>
      <table id="customers">
        <tr>
          <th>Serial Number</th>
          <th>Parcel Id</th>
          <th>Arrival Date</th>
          <th>Sender</th>
          <th> Location Id</th>
          <th> Location Name</th>
          <th> User Name</th>
          <th> User PhoneNumber</th>
          <th> ETA</th>
          <th> Delivery Status</th>
        </tr>
        {listData !== undefined ? (
          <tr>
            <td>1</td>
            <td>{listData.parcel_id}</td>
            <td>{moment(listData.last_updated).format("MM/DD/YYYY")}</td>
            <td>{listData.sender}</td>
            <td>{listData.location_id}</td>
            <td>{listData.location_name}</td>
            <td>{listData.user_name}</td>
            <td>{listData.user_phone}</td>
            <td>{moment(listData.eta).format("MM/DD/YYYY")}</td>
            <td>{listData.status}</td>
          </tr>
        ) : (
          []
        )}
      </table>
    </div>
  );
}
