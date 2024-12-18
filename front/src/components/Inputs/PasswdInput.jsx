import React from 'react'

export default function PasswdInput( { password, onChange } ) {
    return (
        <>
            <div className='mt-2'>
                <label htmlFor='password' className='text-white text-xl' >
                    Password
                </label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                    placeholder='Enter your password'
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
            </div>
        </>
    )
}
