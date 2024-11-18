'use client'

import classes from './PlanetCarousel.module.css';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import Button from '@/UI/button/Button';
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";
import { motion } from 'framer-motion';

export default function PlanetCarousel({planets}){
    const[selectedPlanet, setSelectedPlanet] = useState(planets[0]);
    const[cardIndex, setCardIndex] = useState(0);
    
    const handleNext = () => {
        setCardIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % planets.length;
            setSelectedPlanet(planets[newIndex]); // Update selected planet
            return newIndex;
        });
    };
    
    const handlePrevious = () => {
        setCardIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + planets.length) % planets.length;
            setSelectedPlanet(planets[newIndex]); // Update selected planet
            return newIndex;
        });
    };
   
    
    return(
        
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <Image src={selectedPlanet.image} alt={selectedPlanet.slug} width={selectedPlanet.slug === 'saturn' ? 600 : 300} height={300}/>    
                <h2 className={classes[selectedPlanet.slug]}>{selectedPlanet.title}</h2>
                 <p>{selectedPlanet.summary}</p>
                <div className={classes.buttons}>
                    <Link href={`/all-planets/${selectedPlanet.slug}`}><Button> More facts about {selectedPlanet.title}</Button></Link>
                    <Link href='/'><Button textOnly>Home Page</Button></Link>
                </div>
            </div>

            <div className={classes.carouselContainer}>

                <Button textOnly onClick={handlePrevious}><RiArrowLeftWideFill /></Button>
                
                <div className={classes.carousel}>
                    {planets.map((planet, index) => {

                         // Calculate the dynamic position of each card
                        const position = (index - cardIndex + planets.length) % planets.length;

                        // Adjust for seamless wrapping
                        const xOffset = position < planets.length / 2 ? position : position - planets.length;

                        return(

                        <motion.div 
                            key={planet.slug} 
                            className={`${classes.card} ${cardIndex === index ? classes[planet.slug] : ''}`} 

                            initial={{ opacity: 0, scale: 0.8, x: 0}} 
                            animate={{
                                opacity: 1,
                                scale: index === cardIndex ? 1 : 0.8, 
                                x: `${xOffset * 100}%` , 
                                zIndex: index === cardIndex ? 5 : 1,  
                            }}
                            transition={{
                                scale: { duration: 0.5, ease: "easeInOut" },
                                x: { type: "spring", stiffness: 300, damping: 30 },
                            }}
                           
                            >
                            <Image src={planet.image} alt={planet.slug} width={planet.slug === 'saturn' ? 200 : 100} height={100}/>
                            <div className={classes.cardInfo}>
                                <h3>{planet.title}</h3>
                                <p>{planet.summary.substring(0, 60)}...</p>
                            </div>
                        </motion.div>
                        )
                    })}
                </div>

                <Button textOnly onClick={handleNext}><RiArrowRightWideFill /></Button>
            </div>
        </div>
    )
}


// OLD CAROUSEL

// export default function PlanetCarousel({planets}){
//     const[selectedPlanet, setSelectedPlanet] = useState(planets[0]);
//     const[cardIndex, setCardIndex] = useState(0);
    

//     function handleCardClick(planet, index){
//         setSelectedPlanet(planet);
//         setCardIndex(index);
//     }

//     function handleNext(){
//         const nextIndex = (cardIndex + 1) % planets.length;
//         setCardIndex(nextIndex);
//         setSelectedPlanet(planets[nextIndex]);
//     }

//     function handlePrevious(){
//         const prevIndex = (cardIndex - 1 + planets.length) % planets.length;
//         setCardIndex(prevIndex);
//         setSelectedPlanet(planets[prevIndex]);
//     }

   
   
    
//     return(
        
//         <div className={classes.wrapper}>
//             <div className={classes.content}>
//                 <Image src={selectedPlanet.image} alt={selectedPlanet.slug} width={selectedPlanet.slug === 'saturn' ? 600 : 300} height={300}/>    
//                 <h2 className={classes[selectedPlanet.slug]}>{selectedPlanet.title}</h2>
//                  <p>{selectedPlanet.summary}</p>
//                 <div className={classes.buttons}>
//                     <Link href={`/all-planets/${selectedPlanet.slug}`}><Button> More facts about {selectedPlanet.title}</Button></Link>
//                     <Link href='/'><Button textOnly>Home Page</Button></Link>
//                 </div>
//             </div>

//             <div className={classes.carouselContainer}>

//                 <Button textOnly onClick={handlePrevious}><RiArrowLeftWideFill /></Button>
                
//                 <div className={classes.carousel}>
//                     {planets.map((planet, index) => (
//                         <motion.div 
//                             key={planet.slug} 
//                             className={`${classes.card} ${cardIndex === index ? classes[planet.slug] : ''}`} 
//                             onClick={() => handleCardClick(planet, index)}
//                             initial={{ opacity: 0, scale: 0.8, x: 0}} 
//                             animate={{
//                                 opacity: 1,
//                                 scale: index === cardIndex ? 1 : 0.8, 
//                                 x: (index - cardIndex) * 100 + "%" , 
//                                 zIndex: index === cardIndex ? 5 : 1,  
//                             }}
//                             transition={{
//                                 scale: { duration: 0.5, ease: "easeInOut" },
//                                 x: { type: "spring", stiffness: 300, damping: 30 },
//                             }}
                           
//                             >
//                             <Image src={planet.image} alt={planet.slug} width={planet.slug === 'saturn' ? 200 : 100} height={100}/>
//                             <div className={classes.cardInfo}>
//                                 <h3>{planet.title}</h3>
//                                 <p>{planet.summary.substring(0, 60)}...</p>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>

//                 <Button textOnly onClick={handleNext}><RiArrowRightWideFill /></Button>
//             </div>
//         </div>
//     )
// }