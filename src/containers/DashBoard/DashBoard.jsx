import React, { useState, useEffect } from "react";
import CardMember from "../../components/CardMember/CardMember";
import Header from "../../components/Header/Header";
import "./style.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import FormModal from "../../components/FormModal/FormModal";
import { useContext } from "react";
import UserContext from "../../context/userContext";

const DashBoard = () => {
  const { developers, getDevelopers,getProfile,getProjectsByName } = useContext(UserContext);
  useEffect(() => {
    getDevelopers();
    getProfile(null);
    getProjectsByName('');
  }, []);
  const [modalState, setState] = useState();
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "developers"), {
        Cargo: form.Post,
        email: form.Email,
        name: form.Name,
        phone: parseInt(form.Phone),
        Area: form.Area,
        projects: [],
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setState(false);
  };

  return (
    <div className="dashboard">
      <Header />
      <header className="header"></header>
      <FormModal modalState={modalState} setState={setState}>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="Email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="Phone"
            placeholder="Telefono"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Post"
            placeholder="Cargo"
            value={form.post}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Area"
            placeholder="Area"
            value={form.area}
            onChange={handleChange}
          />
          <input className="input-button" type="submit" value="Registrar" />
        </form>
      </FormModal>
      <div className="member-list">
        {developers.map((developer, index) => (
          <CardMember
            key={index}
            developer={developer}
            className="card"
          ></CardMember>
        ))}
      </div>
      <div className="logo">
        <div className="button">
          <button type="button" onClick={() => setState(true)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
