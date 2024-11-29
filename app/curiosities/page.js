'use client'

import Button from '@/UI/button/Button'
import classes from './page.module.css'
import FormCuriosity from '@/components/form-curiosity/FormCuriosity';
import { useState } from 'react';

export default function Curiosities(){
    const[isOpen, setIsOpen] = useState(false);

    function handleOpenModal(){
        setIsOpen(true);
    }

    function handleCloseModal(){
        setIsOpen(false)
    }

    console.log(isOpen);
    

    return(
        <>
            {!isOpen && (
                <Button onClick={handleOpenModal} >Add Curiosity</Button>
            )}
            {isOpen &&(
                <FormCuriosity open={isOpen} onClose={handleCloseModal}/>
            )}
            <div> Curiosities page</div>
        
        </>
    )
}