import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Components/UserCards.css'

/**
 * @component
 * @param {Object} data -
 * @returns {JSX.Element} UserCard component
 */
const UserCard = (data) => {
  return (
    <Link to={`/user/${data.id}`} className="userCard">
      {/* {console.log('Entrée composant UserCard', data)} */}
      <li>
        <img src={data.avatar} alt="" />
        <p>{data.name}</p>
      </li>
    </Link>
  )
}

export default UserCard
