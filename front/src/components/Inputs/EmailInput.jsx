import React from 'react'

export default function EmailInput( { email, onChange } ) {
    return (
        <>
            <label htmlFor='email' className='text-white text-xl text-left w-full'>
                Email
            </label>
            <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={onChange}
                placeholder='Enter your email'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
        </>
    )
}
