import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const DeleteUserComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const queryClient = useQueryClient()

  const deleteUser = useMutation(
    (id) => axios.delete(`http://localhost:7000/user/delete/${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );

  const handleDeleteUser = async () => {
    try {
      const response = await axios.get("http://localhost:7000/user/get_all", {
        params: { name, email },
      });

      const user = response.data.find((user) => user.name === name && user.email === email);

      if (user) {
        deleteUser.mutate(user.id);
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.error("Error deleting user", error);
    }
    window.location.reload()
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter User Name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter User Email"
      />
      <button onClick={handleDeleteUser}>Delete User</button>
    </div>
  );
};

export default DeleteUserComponent