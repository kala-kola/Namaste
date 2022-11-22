import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="navbar">
      <ul className="navbarlist">
        <li className="navbarbullet">
          <Link className="navlink" to={'/'}>
            Sun Salutations
          </Link>
        </li>
        {/* <li>
          <Link className="navlink" to="/gratitude">
            Gratitude Attitude
          </Link>
        </li> */}
      </ul>
    </nav>
  )
}
