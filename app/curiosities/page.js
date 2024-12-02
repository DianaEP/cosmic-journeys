'use client'

import Button from '@/UI/button/Button'
import classes from './page.module.css'
import FormCuriosity from '@/components/form-curiosity/FormCuriosity';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { httpGetCuriosities } from '@/lib/http-api';

export default function Curiosities(){
    const[curiosities, setCuriosities] = useState([]);
    const[isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        async function fetchData(){
            const data = await httpGetCuriosities();
            setCuriosities(data)
        }

        fetchData()
    },[]);

    function handleOpenModal(){
        setIsOpen(true);
    }

    function handleCloseModal(){
        setIsOpen(false)
    }

    function handleAddCuriosity(newCuriosity){
        setCuriosities((prevCuriosities) => [
            ...prevCuriosities,
            newCuriosity
        ])
    }

    console.log(curiosities);
    

    

    return(
        <>
            {!isOpen && (
                <Button onClick={handleOpenModal} >Add Curiosity</Button>
            )}
            <AnimatePresence mode='wait'>
                {isOpen &&(
                    <FormCuriosity 
                        open={isOpen} 
                        onClose={handleCloseModal} 
                        onAdd={handleAddCuriosity}
                    />
                )}


            </AnimatePresence>
            <div> Curiosities page</div>
        
        </>
    )
}