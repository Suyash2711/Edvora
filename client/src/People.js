import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Details from "./Details";

const People = () => {
  const [people, setPeople] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [identifier, setIdentifier] = useState("");

  function showModalfunc(id) {
    setShowModal(!showModal);
    setIdentifier(id);
  }
  const url_people = "http://assessment.api.vweb.app/users";

  const getPeople = () => {
    axios
      .get(url_people)
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div>
      {people.map((person) => {
        return (
          <div className="person" onClick={() => showModalfunc(person.user_id)}>
            {person.name}
            <span style={{ float: "right" }}>
              <FaRegArrowAltCircleRight style={{ color: "rgb(63, 139, 63)" }} />
            </span>
          </div>
        );
      })}
      {showModal ? <Details id={identifier} /> : null}
    </div>
  );
};

export default People;
