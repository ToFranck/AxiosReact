import React from "react";
import { useState } from "react";
import axios from "axios";


export default function CreateGroup() {
const url = "https://ynov-workplace.osc-fr1.scalingo.io/api/groups/";
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        url,
        {
          name,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )

      .catch((error) => {
        console.log(error);
      });
  };

    return (
        <>
        <form onSubmit={(e) => handleSubmit(e)} className="form1">
        <h2 className="title">Crée un groupe </h2>
            <label>
                <p>Nom</p>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                <p>Description</p>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <br />
            <button type="submit">Crée</button>
        </form>
        </>
    )

}