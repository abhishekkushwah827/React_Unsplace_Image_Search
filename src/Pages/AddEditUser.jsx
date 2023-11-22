import React, { useEffect, useState } from "react";
import "./AddEditUser.css";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header";
import { addUser, editUser, getUserById } from "../utils/common/userCrud";
import { validateForm } from "../utils/common/Validation";

const initialFormVals = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
};

function AddEditUser() {
  const [formVals, setFormVals] = useState(initialFormVals);
  const [error, setError] = useState(false);
  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    if (params.userId) {
      const user = getUserById(params.userId);
      const { name, username, email, phone, website } = user;
      setFormVals({ name, username, email, phone, website });
    }
  }, [params.userId]);

  const inputChangeHandler = (e) => {
    setFormVals({ ...formVals, [e.target.id]: e.target.value });
  };
  const addEditUser = async (e) => {
    e.preventDefault();
    const errorMessage = validateForm(formVals);
    if (errorMessage) {
      setError(errorMessage);
    } else {
      params.userId ? editUser(params.userId, formVals) : addUser(formVals);
      navigate("/users");
    }
  };

  return (
    <>
      <Header />
      <div className="addUser">
        <h2>{params.userId ? "Edit" : "Add"} User</h2>
        <form className="addUser__form">
          <div className="inputGroup">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              className="input"
              id="name"
              placeholder="Enter Name"
              onChange={inputChangeHandler}
              value={formVals.name}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="username" className="label">
              Username
            </label>
            <input
              type="username"
              className="input"
              id="username"
              placeholder="Enter Username"
              onChange={inputChangeHandler}
              value={formVals.username}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              className="input"
              id="email"
              placeholder="Enter Email"
              onChange={inputChangeHandler}
              value={formVals.email}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="phone" className="label">
              Phone
            </label>
            <input
              type="number"
              className="input"
              id="phone"
              placeholder="Enter Phone"
              onChange={inputChangeHandler}
              value={formVals.phone}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="website" className="label">
              Website
            </label>
            <input
              type="text"
              className="input"
              id="website"
              placeholder="www.something.com"
              onChange={inputChangeHandler}
              value={formVals.website}
            />
          </div>
          {error && <p className="login__errorMsg">{error}</p>}
          <button onClick={addEditUser} className="greenBtn">
            {params.userId ? "Edit" : "Add"}
          </button>
        </form>
      </div>
    </>
  );
}

export default AddEditUser;
