import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">IPSSI MERN Solo</div>
        <div className="space-x-4">
          <NavLink 
            to="/login" 
            className={({ isActive }) => 
              isActive ? "bg-gray-700 text-white rounded px-3 py-2" : "text-gray-300 hover:bg-gray-700 hover:text-white rounded px-3 py-2"
            }
          >
            Login
          </NavLink>
          <NavLink 
            to="/register" 
            className={({ isActive }) => 
              isActive ? "bg-gray-700 text-white rounded px-3 py-2" : "text-gray-300 hover:bg-gray-700 hover:text-white rounded px-3 py-2"
            }
          >
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  )
}