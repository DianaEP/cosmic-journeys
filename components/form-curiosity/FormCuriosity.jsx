'use client'

import Button from '@/UI/button/Button'
import classes from './FormCuriosity.module.css'
import Modal from '@/UI/modal/Modal'
import { useState } from 'react'
import { httpPostCuriosity } from '@/lib/http-api'



export default function FormCuriosity({open, onClose, onAdd}){ 
    const[text, setText] = useState('');

    function handleTextChange(e){
        setText(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault();
        if(text.trim() !== ''){
            const newCuriosity = await httpPostCuriosity(text);
            onAdd(newCuriosity);
            setText('')
            onClose();
        }
    }


    return(
        <Modal open={open} onClose={onClose}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <label className={classes.formLabel} htmlFor='curiosity'>Do you know something interesting about the solar system? Share it here: </label>
                <textarea 
                    className={classes.formTextarea} 
                    id='curiosity' 
                    placeholder="Write your curiosity here..."
                    value={text}
                    onChange={handleTextChange}
                />

                <div className={classes.formButtons}>
                    <Button type='button' textOnly onClick={onClose}>Cancel</Button>
                    <Button>Add Curiosity</Button>
                </div>
            </form>
        </Modal>
    )
}