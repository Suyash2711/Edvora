import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/navbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  linearGradient,
  CartesianGrid,
  RadarChart,
  Radar,
  PolarRadiusAxis,
  PolarAngleAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const data2 = [
//   {
//     order_id: 1,
//     product_id: 25,
//     quantity: 15,
//     user_id: 20,
//     order_date: "1645767336",
//   },
//   {
//     order_id: 2,
//     product_id: 25,
//     quantity: 11,
//     user_id: 7,
//     order_date: "1646074072",
//   },
//   {
//     order_id: 3,
//     product_id: 28,
//     quantity: 12,
//     user_id: 20,
//     order_date: "1649596948",
//   },
//   {
//     order_id: 4,
//     product_id: 25,
//     quantity: 2,
//     user_id: 18,
//     order_date: "1629622903",
//   },
//   {
//     order_id: 5,
//     product_id: 28,
//     quantity: 9,
//     user_id: 6,
//     order_date: "1654642640",
//   },
//   {
//     order_id: 6,
//     product_id: 12,
//     quantity: 4,
//     user_id: 2,
//     order_date: "1637077313",
//   },
// ];

const App = () => {
  const [orders, setOrders] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const url_products = "https://assessment.api.vweb.app/products";
  const url_orders = "https://assessment.api.vweb.app/orders";
  const getDetails = () => {
    axios
      .get(url_products)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  const getOrders = () => {
    axios
      .get(url_orders)
      .then((response) => {
        setQuantity(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getDetails();
    getOrders();
  }, []);

  var hash = new Map();
  var proIdObject = {};
  hash.set("Nathan", "2");

  for (let i = 0; i < orders.length; i++) {
    hash.set(i, hash[i++]);
  }
  for (let [key, value] of hash) {
    console.log(`${key} = ${value}`);
  }

  return (
    <>
      <div style={{ width: "1100px", height: "600px" }}>
        {console.log("Order Detailas --------------------------------------")}
        {console.log(orders)}
        <h2>Edvora</h2>
        <ResponsiveContainer width="100%" height="40%">
          <AreaChart
            width={730}
            height={250}
            data={orders}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="71B679" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="A87EBE" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name[0]" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="stock"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#71B679)"
            />
            <Area
              type="monotone"
              dataKey="selling_price"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#A87EBE)"
            />
          </AreaChart>
          <BarChart width={730} height={250} data={quantity}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_id" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="product_id" fill="#8884d8" />
            <Bar dataKey="quantity" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default App;
