import axios from 'axios';
import React, { useEffect, useState } from 'react';
const UsersList = ({ usersList, selectuser, deleteuser }) => {
  return (
    <ul className='list-container'>
      {
        usersList?.map(user => (
          <li key={user.id}>
            <div className='userdata'>
              <p><b>{user.first_name} {user.last_name}</b></p>
              <p>{user.email}</p>
              <p><i className='bx bxs-cake'></i>{user.birthday}</p>
            </div>
            <div className='buttons'>
              <button onClick={() => deleteuser(user.id)} className='delete button'><i className='bx bxs-trash'></i></button>
              <button onClick={() => selectuser(user)} className='select button'><i className='bx bxs-edit'></i></button>
            </div>
          </li>
        ))
      }
    </ul>
  );
};
export default UsersList;