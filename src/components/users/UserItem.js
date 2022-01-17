import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="profile pic"
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link className="btn btn-dark btn-sm my-1" to={`/user/${login}`}>
          More
        </Link>
      </div>
    </div>
  )
}

export default UserItem
