import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import People from "./People";
import Details from "./Details";
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

const App = () => {
  const [products, setProducts] = useState([]);

  const url_products = "https://assessment.api.vweb.app/products";

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
  }, []);

  return (
    <>
      <div style={{ width: "1100px", height: "600px", margin: "2vh 5vh" }}>
        <h2>Edvora</h2>
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
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
