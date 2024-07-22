import React from 'react';
import './App.css';
import CreateUser from './routes/user_routes/create_user_query';
import UpdateUser from './routes/user_routes/update_user_query';
import DisplayUsers from './routes/user_routes/get_user_query';
import DeleteUser from './routes/user_routes/delete_user_query';

function App() {
  return (
    <div>
      <DisplayUsers />
      <CreateUser />
      <UpdateUser />
      <DeleteUser />
    </div>
  );
}

export default App;
