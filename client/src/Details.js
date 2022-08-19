import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Orders } from "./Orders";

const Details = (id) => {
  const [details, setDetails] = useState([]);

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

  console.log("Orders Page................");
  console.log(details);

  // const result = details.filter((detail) => (detail.user_id = id));

  return (
    <>
      <div className="details">CHELSEA!!!!!!!!!!!!!!!!!!!11</div>
    </>
  );
};

export default Details;
