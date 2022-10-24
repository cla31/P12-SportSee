import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Components/UserCards.css'

const UserCard = (data) => {
  return (
    <Link to={`/user/${data.id}`} className="userCard">
      <li>
        <img src={data.avatar} alt="" />
        <p>{data.name}</p>
      </li>
    </Link>
  )
}

export default UserCard
