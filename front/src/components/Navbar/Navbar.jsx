import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Supprimer le token du localStorage
    navigate('/login');
  };

  const token = localStorage.getItem('token'); // Récupérer le token du localStorage

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <NavLink to="/" className="text-white">
            Le Coin Bon
          </NavLink>
        </div>
        <div className="space-x-4">
          {token ? (
            <>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "bg-gray-700 text-white rounded px-3 py-2" : "text-gray-300 hover:bg-gray-700 hover:text-white rounded px-3 py-2"
                }
              >
                Profile
              </NavLink>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white rounded px-3 py-2"
              >
                Logout
              </button>
            </>

          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
}