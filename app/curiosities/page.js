'use client'

import Button from '@/UI/button/Button'
import classes from './page.module.css'
import FormCuriosity from '@/components/form-curiosity/FormCuriosity';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { httpDeleteCuriosity, httpGetCuriosities } from '@/lib/http-api';
import AnimatedList from '@/UI/animated-list/AnimatedList';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";

export default function Curiosities(){
    const[curiosities, setCuriosities] = useState([]);
    const[isOpen, setIsOpen] = useState(false);
    const[editingCuriosity, setEditingCuriosity] = useState(null);

    useEffect(() => {
        async function fetchData(){
            const data = await httpGetCuriosities();
            setCuriosities(data)
        }

        fetchData()
    },[]);

    function handleOpenModal(curiosity=null){
        console.log('Opening modal with curiosity:', curiosity);
        setEditingCuriosity(curiosity)
        setIsOpen(true);
    }

    function handleCloseModal(){
        setIsOpen(false);
        setEditingCuriosity(null)
    }

    function handleAddCuriosity(newCuriosity){
        setCuriosities((prevCuriosities) => [
            ...prevCuriosities,
            newCuriosity
        ])
    }

    function handleUpdateCuriosity(updatedCuriosity){
        setCuriosities((prevCuriosities) => 
            prevCuriosities.map((curiosity) => 
                curiosity.id === updatedCuriosity.id ? updatedCuriosity : curiosity
            )
        )    
    }

    async function handleDeleteCuriosity(id){
        try {
            const deletedCuriosity = await httpDeleteCuriosity(id);
            if (deletedCuriosity) {
                setCuriosities((prevCuriosities) =>
                    prevCuriosities.filter((curiosity) => curiosity.id !== id)
                );
            }
        } catch (error) {
            console.error('Error deleting curiosity:', error);
        }
    }

    // console.log(curiosities);
    
    // const curiositiesText = curiosities.map((curiosity) => curiosity.text)

    

    return(
        <>
            {!isOpen && (
                <Button onClick={() => handleOpenModal(null)} >Add Curiosity</Button>
            )}
            <AnimatePresence mode='wait'>
                {isOpen &&(
                    <FormCuriosity 
                        open={isOpen} 
                        onClose={handleCloseModal} 
                        onAdd={handleAddCuriosity}
                        onUpdate={handleUpdateCuriosity}
                        editingCuriosity={editingCuriosity}
                    />
                )}


            </AnimatePresence>
            <div> Curiosities page</div>

            <div>
                <AnimatedList 
                    isVisible={true} 
                    items={curiosities}
                    renderItem={(item) => (
                        <div className={classes.curiosityItem}>
                            <p>{item.text}</p>
                            <div className={classes.curiosityActions}>
                                <span onClick={() => handleDeleteCuriosity(item.id)}><RiDeleteBin5Line /></span>
                                <span onClick={() => handleOpenModal(item)}><FaPencil /></span>
                            </div>
                        </div>
                    )}
                />

            </div>
        
        </>
    )
}