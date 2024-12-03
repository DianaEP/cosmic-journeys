'use client'

import Button from '@/UI/button/Button'
import classes from './FormCuriosity.module.css'
import Modal from '@/UI/modal/Modal'
import { useEffect, useState } from 'react'
import { httpPostCuriosity, httpPutCuriosity } from '@/lib/http-api'



export default function FormCuriosity({open, onClose, onAdd, onUpdate, editingCuriosity}){ 
    const[text, setText] = useState(editingCuriosity ? editingCuriosity.text : '');

    // Update text when editingCuriosity changes
    useEffect(()=>{
        if(editingCuriosity){
            setText(editingCuriosity.text)
        }
    },[editingCuriosity])

    function handleTextChange(e){
        setText(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault();
        if(text.trim() !== ''){
            console.log('editingCuriosity', editingCuriosity); 
            if(editingCuriosity){
                const updatedCuriosity = await httpPutCuriosity(editingCuriosity.id, text);
                console.log('Updated curiosity:', updatedCuriosity);
                if(updatedCuriosity){
                    onUpdate(updatedCuriosity);
                }
            }else{
                const newCuriosity = await httpPostCuriosity(text);
                onAdd(newCuriosity);
            }
            setText('')
            onClose();
        }
    }


    return(
        <Modal open={open} onClose={onClose}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <label className={classes.formLabel} htmlFor='curiosity'>
                    {editingCuriosity ? 
                        'Edit Your curiosity here: ' 
                            : 
                        'Do you know something interesting about the solar system? Share it here: '
                    }
                    
                </label>
                <textarea 
                    className={classes.formTextarea} 
                    id='curiosity' 
                    placeholder="Write your curiosity here..."
                    value={text}
                    onChange={handleTextChange}
                />

                <div className={classes.formButtons}>
                    <Button type='button' textOnly onClick={onClose}>Cancel</Button>
                    <Button>{editingCuriosity? 'Save Curiosity' : 'Add Curiosity'}</Button>
                </div>
            </form>
        </Modal>
    )
}