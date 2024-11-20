'use client'

import { useState } from 'react';
import classes from './PlanetDetails.module.css'
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/UI/button/Button';

const planetImageAnimation = {
    mercury:{
        dimensionScale: 1.2,
        orbitSpeed: 1,
        rotationSpeed: 10
    },
    venus:{
        dimensionScale: 1.8,
        orbitSpeed: 1.5,
        rotationSpeed: 35
    },
    earth:{
        dimensionScale: 2,
        orbitSpeed: 1.8,
        rotationSpeed: 0.8
    },
    mars:{
        dimensionScale: 1.6,
        orbitSpeed: 2,
        rotationSpeed: 0.9
    },
    jupiter:{
        dimensionScale: 3.5,
        orbitSpeed: 4,
        rotationSpeed: 0.1
    },
    saturn:{
        dimensionScale: 3.0,
        orbitSpeed: 4.6,
        rotationSpeed: 0.2
    },
    uranus:{
        dimensionScale: 2.5,
        orbitSpeed: 5,
        rotationSpeed: 0.5
    },
    neptune:{
        dimensionScale: 2.4,
        orbitSpeed: 5.5,
        rotationSpeed: 0.4
    },

}

export default function PlanetAnimation({planet}){
    const{ slug, image, dimension, orbit, rotation } = planet;
    const[animationType, setAnimationType] = useState(null);
    const[isAnimating, setIsAnimating] = useState(false);
    const animatedPlanet = planetImageAnimation[slug];

    console.log(animatedPlanet);
    

    function handleClickAnimation(animationType){
        setAnimationType(false);
        setTimeout(() => { // delay to help reset the previous transition when switching from one button to another
            setAnimationType(animationType);
            setIsAnimating(true);
          }, 100)
        
    }

    function handleStopAnimation(){
        setAnimationType(null);
        setIsAnimating(false);
    }


    console.log(animatedPlanet);

    const animatePlanet ={
        dimension: { 
            scale:animatedPlanet.dimensionScale, 
            x: 0, 
            rotate: 0, 
            transition: { repeat: isAnimating ? Infinity : 0, duration: 3, ease: "linear" }, 
        },
        orbit: { 
            scale: 1, 
            x: "100vw", 
            rotate: 0,
            transition: { repeat: isAnimating ? Infinity : 0, duration: animatedPlanet.orbitSpeed, ease: "linear" }, 
        },
        rotation: {
            scale: 1, 
            x: 0, 
            rotate: slug === 'venus' ? -360 : slug === 'uranus' ? 90 : 360,
            transition: { repeat: isAnimating ? Infinity : 0, duration: animatedPlanet.rotationSpeed, ease: "linear" }, 
        },
        default: {
            scale: 1, 
            x: 0, 
            rotate: 0,
            transition: { repeat: 0, duration: 0.5, ease: "easeOut" },
        }
    }

    return(
        <div className={classes.planetAnimationWrapper}>
            <AnimatePresence>
                <motion.div
                    animate={animatePlanet[animationType] || animatePlanet.default}
                >
                    <Image src={image} alt={slug} width={slug === 'saturn' ? 200 : 100} height={100}/>
                </motion.div>

            </AnimatePresence>
            <div className={classes.buttonsWrapper}>
                <div className={classes.animationActions}>
                    <p>Dimension: <span className={slug}>{dimension}</span></p>
                    <Button onClick={() => handleClickAnimation('dimension')}>Animate</Button>
                </div>
                <div className={classes.animationActions}>
                    <p>Orbit around sun: <span className={slug}>{orbit}</span></p>
                    <Button onClick={() => handleClickAnimation('orbit')}>Animate</Button>
                </div>
                <div className={classes.animationActions}>
                    <p>Rotation around it&apos;s own axis: <span className={slug}>{rotation}</span></p>
                    <Button onClick={() => handleClickAnimation('rotation')}>Animate</Button>
                </div>
            </div>
            <Button onClick={handleStopAnimation} className={slug}>STOP ANIMATION</Button>

        </div>
    )
}