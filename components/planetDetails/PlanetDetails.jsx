'use client'

import PlanetAnimation from './PlanetAnimation';
import classes from './PlanetDetails.module.css';
import { IoMdArrowDropup } from "react-icons/io";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';





export default function PlanetDetails({planet}){
    const{ facts} = planet;
    const[isRotated, setIsRotated] = useState(false);
    const[isVisible, setIsVisible] = useState(false);

    function handleClick(){
        setIsRotated(prevState => !prevState)
        setIsVisible(prevState => !prevState);
    }

   
    const staggerContainer = {
        initial: {opacity: 0},
        animate: {opacity: 1 , transition : {staggerChildren: 0.5 }},
        exit:{opacity: 0},
        child: {
            initial: { opacity: 0, y: 10},
            animate: { opacity: 1, y: 0, transition: {duration: 0.5}},
            exit: {opacity: 0}
        }
    }

    
    
    return(
        <div className={classes.planetDetailsWrapper}>
           <PlanetAnimation planet={planet}/>
           <div className={classes.facts}>
                <div className={classes.titleFacts}>
                    <p> Interesting facts about this planet  </p>
                    <motion.span
                        initial={{rotate: 0}}
                        animate={{rotate: isRotated ? 180 : 0}}
                        transition={{type: 'spring', stiffness: 200, damping: 30}}
                        onClick={handleClick}
                    >
                        <IoMdArrowDropup />
                    </motion.span>
                </div>
                
                <AnimatePresence mode='wait'>
                    {isVisible && (
                        <motion.ul
                            variants={staggerContainer}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                        >
                            {facts.map((fact) => (
                                 <motion.li 
                                    key={fact} 
                                    className={classes.fact}
                                    variants={staggerContainer.child}
                                >
                                    {fact}
                                </motion.li>
                            ))}

                        </motion.ul>
                    )}
                </AnimatePresence>
           </div>
        </div>
    )
}


// const animatePlanetVariants ={
//     initial : { scale: 1, x: 0, rotate: 0, opacity: 0},
//     animate: {
//         scale: animationType === 'dimension' ? animatedPlanet.dimensionScale : 1,
//         x: animationType === 'orbit' ? animatedPlanet.orbitDistance : 0,
//         rotate: animationType === 'rotation' ?  360 : 0,
//         opacity: 1
//     },
//     exit: { scale: 1, x: 0, rotate: 0, opacity: 0}
// }

// return(
//     <div className={classes.planetDetailsWrapper}>
//         <AnimatePresence>
//             <motion.div
//                 variants={animatePlanetVariants}
//                 initial='initial'
//                 animate='animate'
//                 exit='exit'
//                 transition={{
//                     duration : animationType === 'rotation' ? animatedPlanet.rotationSpeed : 1,
//                 }}
//             >
//                 <Image src={image} alt={slug} width={100} height={100}/>
//             </motion.div>
//         </AnimatePresence>
//         <p>Dimension: <span>{dimension}</span></p>
//         <button onClick={() => setAnimationType('dimension')}>Animate Dimension</button>
//         <p>Time needed to orbit around sun: <span>{orbit}</span></p>
//         <button onClick={() => setAnimationType('orbit')}>Animate speed</button>
//         <p>Time needed to make a rotation around it&apos;s own axis: <span>{rotation}</span></p>
//         <button onClick={() => setAnimationType('rotation')}>Animate rotation</button>
//         <div> Interesting facts about this planet </div>