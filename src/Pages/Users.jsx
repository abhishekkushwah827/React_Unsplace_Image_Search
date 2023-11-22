import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Users.css";
import Header from "../Components/Header";
import UserCard from "../Components/UserCard";
import { USER_API_URL } from "../utils/Constant";
import { deleteUser } from "../utils/common/userCrud";

const Users = () => {
  const [usersList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      setLoading(true);
      const users = JSON.parse(localStorage.getItem("users"));
      if(!users){
        const response = await axios.get(USER_API_URL);
        console.log("getUsers Response:::", response.data);
        localStorage.setItem("users", JSON.stringify(response.data))
        setUserList(response.data);
      }else{
        setUserList(users);
      }
    } catch (error) {
      console.error("getImages Error:::", error);
    }
    setLoading(false);
  };

  const deleteaUser=(id)=>{
    deleteUser(id);
    getUsers();
  }

  return (
    <>
      <Header />
      <div className="users">
        <div className="userList__header">
          <h2>Users</h2>
          <Link className="link" to="/add-edit-user">
            <button className="greenBtn">Add User</button>
          </Link>
        </div>
        <div className="userList">
          {loading ? (
            <p className="loading">Loading...</p>
          ) : (
            usersList.map((user) => <UserCard key={user.id} user={user} deleteUser={deleteaUser}/>)
          )}
        </div>
      </div>
    </>
  );
};

export default Users;
