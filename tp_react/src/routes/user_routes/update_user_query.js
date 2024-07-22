import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const UpdateUserComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newUserData, setNewUserData] = useState({})

  const queryClient = useQueryClient()

  const updateUser = useMutation((userData) => axios.put(`http://localhost:7000/user/update/${userData.id}`, userData), {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const handleUpdateUser = async () => {
    try {
      const response = await axios.get('http://localhost:7000/user/get_all', {
        params: { name, email}
      })

      const user = response.data.find((user) => user.name === name && user.email === email)

      if (user) {
        const updatedUser = { ...user, ...newUserData}
        updateUser.mutate(updatedUser)
      } else {
        console.log('User not found')
      }
    } catch (error) {
      console.error('error updating user:', error)
    }
    window.location.reload()
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={newUserData.email}
        onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
        placeholder="Enter new email"
      />
      <input
        type="text"
        value={newUserData.role}
        onChange={(e) => setNewUserData({ ...newUserData, role: e.target.value })}
        placeholder="Enter new role"
      />
      <button onClick={handleUpdateUser}>Update</button>
    </div>
  );
};

export default UpdateUserComponent;
