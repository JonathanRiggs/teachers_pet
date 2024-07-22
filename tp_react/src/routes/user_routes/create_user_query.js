import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const CreateUserComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const queryClient = useQueryClient()

  const createUser = useMutation((userData) => axios.post('http://localhost:7000/user/create', userData), {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const handleCreateUser = async () => {
    try {
      const newUser = {
        name,
        email
      }

      createUser.mutate(newUser)
    } catch (error) {
      console.error('Error creating user:', error)
    }
    window.location.reload()
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter user email"
      />
      <button onClick={handleCreateUser}>Submit</button>
    </div>
  );
};

export default CreateUserComponent;
