import React, { useState } from 'react';
import { motion } from "motion/react";
import Input from '../components/form/Input';

function Test() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <div className='bg-red-300 h-screen'>
            <h2 className='text-center'>
                Input form
            </h2>
            <div className='flex justify-center items-center'>
                <div className='bg-white p-4 shadow-md'>
                    <form action="">
                        <Input label='Username' onChange={setUsername} />
                        <Input type='email' label='Email' onChange={setEmail} />
                        <Input type='password' label='Password' onChange={setPassword} />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Test;
