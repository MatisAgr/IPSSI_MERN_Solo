import React from 'react'

export default function UsernameInput({ username, onChange }) {
    return (
        <>
            <label htmlFor='username' className='text-white text-xl text-left w-full'>
                Username
            </label>
            <input
                type='text'
                id='username'
                name='username'
                value={username}
                onChange={onChange}
                placeholder='Enter your username'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
        </>
    )
}