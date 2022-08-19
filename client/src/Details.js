import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Orders } from "./Orders";

const Details = (id) => {
  const [details, setDetails] = useState([]);
  let data = [];

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
  }, []);

  // const result = details.filter((detail) => (detail.user_id = id));

  function getData() {
    console.log("Func working..........");
    details.forEach((detail) => {
      if (detail.user_id === id.id) {
        console.log(detail.user_id, id.id);
        data.push(detail);
      }
    });
  }

  getData();

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <div className="details">
        {data.map((dat) => {
          return <div>{dat.user_id}</div>;
        })}
      </div>
    </>
  );
};

export default Details;
