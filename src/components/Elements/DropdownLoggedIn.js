import React from 'react'
import {Link} from "react-router-dom"

const DropdownLoggedIn = () => {
  return (
    <div id="dropdownAvatar" className="select-none	absolute top-15 right-10 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
    <div className="py-3 px-4 text-sm text-gray-900 dark:text-gray-900">
        <div className="font-medium truncate">santanumaity24041996@gmail.comm</div>
    </div>
    <ul className="py-1 text-sm text-gray-700 dark:text-gray-600" aria-labelledby="dropdownUserAvatarButton">
        <li>
            <Link to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
        </li>
        <li>
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
        </li>
    </ul>
    <div className="py-1">
        <span className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-600 dark:hover:text-white">Log out</span>
    </div>
</div>
  )
}

export default DropdownLoggedIn
