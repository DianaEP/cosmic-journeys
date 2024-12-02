'use client'
import classes from './Modal.module.css'
import { IoCloseSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

export default function Modal({children, open, onClose}){
    if (!open) return null;
    return(
        <div className={classes.modalBackground} onClick={onClose}>
            <motion.div 
                className={classes.modalContent} 
                onClick={(e) => e.stopPropagation()}
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -50}}
                transition={{duration: 0.3}}
            >
                <span onClick={onClose} className={classes.closeButton}><IoCloseSharp /></span>
                <div>
                    {children}
                </div>
            </motion.div>
        </div>
    )
}