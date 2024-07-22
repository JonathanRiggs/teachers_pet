import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const getUsers = async () => {
  const response = await axios.get("http://localhost:7000/user/get_all");
  return response.data;
};

const DisplayUsers = () => {
  const { data: user, error, isLoading } = useQuery("postData", getUsers);

  if (isLoading) return <div>Fetching users...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <ul>
      {user.map((user) => (
        <li key={user.id}>{user.name} {user.email}</li>
      ))}
    </ul>
  );
};

export default DisplayUsers;
