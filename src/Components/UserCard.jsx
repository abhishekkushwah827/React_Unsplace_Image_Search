
import React from "react";
import "./UserCard.css";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user,deleteUser }) => {
  const navigate = useNavigate();

  const editUser = (userId) => {
    navigate(`/add-edit-user/${userId}`);
  };


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setEditedUser((prevUser) => ({
  //     ...prevUser,
  //     [name]: value,
  //   }));
  // };

  return (
    <div className="userCard">
      <h3>{user.name}</h3>
      <div className="infoField">
        <label>Username:</label>
        <span>{user.username}</span>
      </div>
      <div className="infoField">
        <label>Email:</label>
        <span>{user.email}</span>
      </div>
      <div className="infoField">
        <label>Phone:</label>
        <span>{user.phone}</span>
      </div>
      <div className="infoField">
        <label>Website:</label>
        <span>{user.website}</span>
      </div>
      <div className="buttonGroup">
      <button className="editBtn" onClick={()=>editUser(user.id)}>Edit</button>
      <button className="deleteBtn" onClick={()=>deleteUser(user.id)}>Delete</button>
      </div>
    </div>
  );
};

export default UserCard;

