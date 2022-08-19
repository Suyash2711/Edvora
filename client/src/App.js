import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import People from "./People";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  linearGradient,
  ComposedChart,
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

const App = () => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const url_products = "https://assessment.api.vweb.app/products";
  const url_orders = "https://assessment.api.vweb.app/orders";

  const getData = () => {
    axios
      .get(url_orders)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const getProducts = () => {
    axios
      .get(url_products)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getProducts();
    getData();
  }, []);

  function callData() {
    data.forEach((dat) => {
      products.forEach((prod) => {
        if (prod.product_id === dat.product_id) {
          finalData.push({
            name: prod.name,
            quantity: dat.quantity,
            stock: prod.stock,
            sp: prod.selling_price,
          });
        }
      });
    });
  }

  callData();

  return (
    <>
      <div style={{ width: "1100px", height: "600px", margin: "2vh 5vh" }}>
        <h2 style={{ fontFamily: "Patrick Hand SC" }}>Edvora</h2>
        <div className="row">
          <div className="col-md-4">
            <People />
          </div>
          <div className="col-md-8 right">
            <ResponsiveContainer width="100%" height="40%">
              <AreaChart
                width={730}
                height={250}
                data={products}
                margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
              >
                <Legend />
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
                <XAxis dataKey="name" />
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

              {/* <ComposedChart width={730} height={250} data={finalData}>
                <XAxis dataKey="product_id" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area
                  type="monotone"
                  dataKey={quantity}
                  fill="#8884d8"
                  stroke="#8884d8"
                />
                <Bar dataKey="stock" barSize={20} fill="#413ea0" />
                <Line
                  type="monotone"
                  dataKey="selling_price"
                  stroke="#ff7300"
                />
              </ComposedChart> */}
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
