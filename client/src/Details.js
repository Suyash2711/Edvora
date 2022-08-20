import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const Details = (id) => {
  const [details, setDetails] = useState([]);
  const [product, setProduct] = useState([]);
  let data = [];
  let finalData = [];

  useEffect(() => {
    const getDetails = () => {
      axios
        .get("https://assessment.api.vweb.app/orders")
        .then((response) => {
          setDetails(response.data);
        })
        .catch((error) => console.log(`Error: ${error}`));
    };
    getDetails();

    const getProducts = () => {
      axios
        .get("https://assessment.api.vweb.app/products")
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => console.log(`Error: ${error}`));
    };
    getProducts();
  }, []);

  function getData() {
    details.forEach((detail) => {
      if (detail.user_id === id.id) {
        data.push(detail);
      }
    });

    console.log("data pushed");
    console.log(product);

    data.forEach((dat) => {
      product.forEach((prod) => {
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

  getData();

  return (
    <>
      <div className="details">
        {console.log(finalData)}
        {finalData.map((fn) => {
          return (
            <div>
              <div>Name: {fn.name}</div>
              <div>Quantity: {fn.quantity}</div>
              <div>Stock: {fn.stock}</div>
              <div>Selling Price: {fn.sp}</div>
              <hr className="rule" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Details;
