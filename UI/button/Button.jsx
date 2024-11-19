'use client'

import classes from './Button.module.css';
import { motion } from 'framer-motion';

export default function Button({children, textOnly, onClick, ...props}){

    return(
        <motion.button 
            onClick={onClick} 
            className={textOnly ? classes.buttonText : classes.button} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{type: 'spring', stiffness: 300, damping: 20}}
            {...props}
        >
            {children}
        </motion.button>
    )
}