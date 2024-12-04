'use client'

import Button from '@/UI/button/Button'
import classes from './page.module.css'
import FormCuriosity from '@/components/form-curiosity/FormCuriosity';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { httpDeleteCuriosity, httpGetCuriosities } from '@/lib/http-api';
import AnimatedList from '@/UI/animated-list/AnimatedList';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";
import Image from 'next/image';

export default function Curiosities(){
    const[curiosities, setCuriosities] = useState([]);
    const[isVisible, setIsVisible] = useState(false)
    const[isOpen, setIsOpen] = useState(false);
    const[editingCuriosity, setEditingCuriosity] = useState(null);

    const { scrollYProgress } = useScroll();

    
    const rotateY = useTransform(scrollYProgress, [0, 1], ['0deg', '180deg']);
    const distance = useTransform(scrollYProgress, [0, 1], ['0', '80vw']); 
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1]);

    

    useEffect(() => {
        async function fetchData(){
            const data = await httpGetCuriosities();
            setCuriosities(data)
            setIsVisible(true)
        }

        fetchData()
    },[]);

    

    function handleOpenModal(curiosity=null){
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


    return(
        <>
            <div className={classes.curiosityHeader}>
                <h1>Explore the World of Curiosities</h1>
                <p>Have you ever wondered about the hidden gems of knowledge around you? Add your own curiosity and share it with others! Simply click the button below to start adding fascinating facts and questions that you think everyone should know.</p>
                {!isOpen && (
                    <Button onClick={() => handleOpenModal(null)} >Add Curiosity</Button>
                )}
            </div>

            <motion.div 
                className={classes.movingImage}
                style={{ 
                    x: distance,
                    rotateY: rotateY,
                    opacity: opacity,
                }}
                transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            >
                <Image src='/a.png' alt='astronaut png' width={150} height={150}/>
            </motion.div>


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

            <div>
                <AnimatedList 
                    isVisible={isVisible} 
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