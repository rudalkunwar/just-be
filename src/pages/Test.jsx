import React, { useState } from 'react';
import { motion } from "motion/react";
import Input from '../components/form/Input';
import { toast } from 'react-toastify';

function Test() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("username", username);
        formdata.append("email", email);
        formdata.append("password", password);
        try {
            console.log(...formdata);
            toast.success('Form submitted');
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className='h-screen'>
            <h2 className='text-center'>
                Input form
            </h2>
            <div className='flex justify-center items-center'>
                <div className='bg-white p-4 shadow-md w-1/2 rounded-md'>
                    <form action="" onSubmit={handleSubmit}>
                        <Input className='w-full' label='Username' value={username} onChange={setUsername} />
                        <Input className='w-full' type='email' label='Email' value={email} onChange={setEmail} />
                        <Input className='w-full mb-2' type='password' label='Password' value={password} onChange={setPassword} />
                        <button type='submit' className='bg-blue-500 w-full rounded-md text-white py-2'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Test;
