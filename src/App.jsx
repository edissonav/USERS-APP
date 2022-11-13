import { useState,useEffect } from 'react'
import './App.css'
import UsersList from './components/UsersList'
import axios from 'axios';
import UsersForm from './components/UsersForm';
import background from './assets/among-us-space-background.jpg'
function App() {
  const [usersList,setUsersList]= useState([])
  useEffect(()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res=>setUsersList(res.data))
  },[])
  console.log(usersList)
  const getUser = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res=>setUsersList(res.data))
  }
  const [userselected, setUserselected]=useState(null)
  const selectuser=(user)=>{
    setUserselected(user)
  }
  const unselectuser=()=>{
    setUserselected(null)
  }
  const deleteuser=(id)=>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(()=>getUser())
  }
  return (
    <div className="App">
     <UsersList usersList={usersList} selectuser={selectuser} deleteuser={deleteuser}/>
     <UsersForm getUser={getUser} userselected={userselected} unselectuser={unselectuser}/>
    </div>
  )
}
export default App