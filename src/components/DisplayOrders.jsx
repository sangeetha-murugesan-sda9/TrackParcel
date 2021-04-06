import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import "../styles/style.css";

export default function DisplayOrders(props) {
  const [listData, setListData] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://my.api.mockaroo.com/orders.json?key=e49e6840")
      .then((response) => {
        setListData(response.data);
        console.log(">>>>", listData);
      });
  };

  const getDetails = (item) => {
    props.history.push({
      pathname: "/OrderDetails",
      state: item,
    });
  };

  return (
    <div>
      <div class="data">
        <h4> 📦 Parcel Express</h4>
        <hr />
        <label>Track all your Parcel Express shipments. Simple and Easy!</label>
        <p>
          ParcelMonitor allows a one-stop real time tracking service. Simply
          trace all your Parcel Express packages! Parcel Express claims to be
          the cheapest package delivery company.
        </p>
        <label> Below are the 📦 Package Details</label>
      </div>
      <table id="customers">
        <tr>
          <th>Serial Number</th>
          <th>Sender Name</th>
          <th>Arrived date</th>
          <th>View details </th>
        </tr>
        {listData !== undefined && listData.length > 0
          ? listData.map((item, index) => (
              <tr>
                <td>{index}</td>
                <td>{item.sender}</td>
                <td>{moment(item.last_updated).format("MM/DD/YYYY")}</td>
                <td>
                  <button onClick={() => getDetails(item)}>
                    {" "}
                    View Details
                  </button>
                </td>
              </tr>
            ))
          : []}
      </table>
    </div>
  );
}
