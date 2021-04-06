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
      {listData !== undefined ? (
        <table id="customers">
          <tr>
            <th>Serial Number</th>
            <td>1</td>
          </tr>
          <tr>
            <th>Parcel Id</th>
            <td>{listData.parcel_id}</td>
          </tr>
          <tr>
            <th>Arrival Date</th>
            <td>{moment(listData.last_updated).format("MM/DD/YYYY")}</td>
          </tr>
          <tr>
            <th>Sender</th>
            <td>{listData.sender}</td>
          </tr>
          <tr>
            <th> Location Id</th>
            <td>{listData.location_id}</td>
          </tr>
          <tr>
            <th> Location Name</th>
            <td>{listData.location_name}</td>
          </tr>
          <tr>
            <th> User Name</th>
            <td>{listData.user_name}</td>
          </tr>
          <tr>
            <th> User PhoneNumber</th>
            <td>{listData.user_phone}</td>
          </tr>
          <tr>
            <th> ETA</th>
            <td>{moment(listData.eta).format("MM/DD/YYYY")}</td>
          </tr>
          <tr>
            <th> Delivery Status</th>
            <td>{listData.status}</td>
          </tr>
        </table>
      ) : (
        []
      )}
    </div>
  );
}
