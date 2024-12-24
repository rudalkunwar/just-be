import React from 'react';
import { motion } from "motion/react";

function Test() {
    return (

        <div >
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 8 }}
                transition={{ duration: 2 }}
                className='w-12 h-12 bg-red-700'
            />
        </div>
    );
}

export default Test;
