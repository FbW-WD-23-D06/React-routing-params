import React from 'react';
import usersData from '../data/users.json';
import { useParams } from 'react-router-dom';

function UserDetails() {
  const {userId} = useParams();
  const user = usersData.users.find((user)=> user.id === parseInt(userId));
  
  return (
    <>
    <div>UserDetails</div>
    <p>User Id : {user.id}</p>
    <p>Name : {user.name}</p>
    <p>Email : {user.email}</p>

    </>
  )
}

export default UserDetails