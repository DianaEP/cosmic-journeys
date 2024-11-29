'use client'
import Button from '@/UI/button/Button'
import classes from './FormCuriosity.module.css'
import Modal from '@/UI/modal/Modal'
import { AnimatePresence } from 'framer-motion'


export default function FormCuriosity({open, onClose}){
    return(
        <AnimatePresence mode='wait'>
            {open && (
                <Modal open={open} onClose={onClose}>
                    <form className={classes.form}>
                        <label className={classes.formLabel} htmlFor='curiosity'>Do you know something interesting about the solar system? Share it here: </label>
                        <textarea className={classes.formTextarea} id='curiosity' placeholder="Write your curiosity here..."/>

                        <div className={classes.formButtons}>
                            <Button textOnly onClick={onClose}>Cancel</Button>
                            <Button>Add Curiosity</Button>
                        </div>
                    </form>
                </Modal>
            )}
        </AnimatePresence>
    )
}