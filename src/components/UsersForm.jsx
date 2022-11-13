import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
const UsersForm = ({ getUser, userselected, unselectuser }) => {
  const { handleSubmit, register, reset } = useForm()
  const initialvalues = {
    birthday: "",
    email: "",
    first_name: "",
    id: "",
    last_name: "",
    password: ""
  }
  useEffect(() => {
    if (userselected) {
      reset(
        userselected
      )
    } else {
      reset(
        initialvalues
      )
    }
  }, [userselected])
  console.log(userselected);
  const submit = (data) => {
    if (userselected) {
      axios.put(`https://users-crud1.herokuapp.com/users/${userselected.id}/`, data)
        .then(() => {
          getUser()
          unselectuser()
        })
    } else {
      axios.post('https://users-crud1.herokuapp.com/users/', data)
        .then(() => getUser())
    }
  }
  const [changepassword, setChangepassword] = useState(true)
  const showpassword = () => {
    setChangepassword(!changepassword)
  }
  return (
    <form className='userForm' onSubmit={handleSubmit(submit)}>
      <h1>New User</h1>
      <div className='name-container'>
        <div className='inputcontainer'>
          <label htmlFor="first_name"><i className='bx bxs-user'></i></label>
          <input placeholder='First Name' {...register('first_name')} type="text" name="first_name" id="first_name" />
        </div>
        <div className='inputcontainer'>
          <label htmlFor="last_name"></label>
          <input placeholder='Last Name' {...register('last_name')} type="text" name="last_name" id="last_name" />
        </div>
      </div>
      <div className='info-container' >
        <div className='data-container'>
          <label htmlFor="email"><i className='bx bx-envelope'></i></label>
          <input placeholder='E-mail' {...register('email')} type="text" name="email" id="email" />
        </div>
        <div className='data-container'>
          <label htmlFor="password"><i className='bx bxs-lock'></i></label>
          <input placeholder='Password' {...register('password')} type={changepassword ? "password" : "text"} name="password" id="password" />
          <button className='button-password' type='button' onClick={showpassword}><i className='bx bx-show-alt'></i></button>
        </div>
        <div className='data-container'>
          <label htmlFor="birthday"><i className='bx bxs-cake'></i></label>
          <input placeholder='Birthday' {...register('birthday')} type="date" name="birthday" id="birthday" />
        </div>
        <div className='submit-container'>
          <button className='submit'>Submit</button>
        </div>
      </div>
    </form>
  );
};
export default UsersForm;