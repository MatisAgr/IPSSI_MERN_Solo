import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardAnnouce from '../../components/Card/CardAnnouce';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [announces, setAnnounces] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/user/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(response.data);
        setFormData({
          username: response.data.username,
          email: response.data.email,
          password: '',
          confirmPassword: ''
        });
      } catch (err) {
        setError('Failed to fetch user profile');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);


  // get all announces by user
  useEffect(() => {
    const fetchAnnounces = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/announces/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAnnounces(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des annonces', error);
      }
    };

    fetchAnnounces();
  }, []);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('http://localhost:8080/user/update/me', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUser(response.data);
      setEditMode(false);
      alert('Profile updated successfully');
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  // annouce delete
  const handleDelete = async (announceId) => {
    const confirmed = window.confirm('Êtes-vous sûr de vouloir supprimer cette annonce ?');
    if (!confirmed) {
      return;
    }
  
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/announce/${announceId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setAnnounces(announces.filter(announce => announce._id !== announceId));
      alert('Annonce supprimée avec succès');
    } catch (err) {
      setError('Failed to delete announce');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-white">Profile Page</h1>
      {user && (
        <div className="bg-white shadow-md rounded p-4">
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
              <button
                onClick={() => setEditMode(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      )}

<h2 className="text-3xl font-bold mt-8 mb-4 text-white">Your Announcements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {announces.map((announce) => (
          <div key={announce._id} className="relative">
            <span className="absolute top-0 left-0 bg-blue-500 text-white font-bold py-1 px-2 rounded">
              id : {announce._id}
            </span>
            <button
              onClick={() => handleDelete(announce._id)}
              className="absolute top-0 right-8 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => setEditMode(true)}
              className="absolute top-0 right-24 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
            >
              Edit
            </button>
            <CardAnnouce
              title={announce.title}
              description={announce.description}
              price={announce.price}
              category={announce.category}
              location={announce.location}
              images={announce.images}
              createdAt={new Date(announce.createdAt).toLocaleDateString()}
              user={user.username}
            />
          </div>
        ))}
      </div>
    </div>
  );
}