import React from 'react'
import { Link } from 'react-router-dom'

function AccountView() {
  return (
    <div>
      Account View
      <Link to="/edit">Edit</Link>
    </div>
  )
}

export default AccountView
