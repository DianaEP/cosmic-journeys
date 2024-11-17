'use client'

import classes from './PlanetCarousel.module.css';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import Button from '@/UI/button/Button';

export default function PlanetCarousel({planets}){
    const[selectedPlanet, setSelectedPlanet] = useState(planets[0]);
    

    function handleCardClick(planet){
        setSelectedPlanet(planet)
    }

    
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
                <div className={classes.carousel}>
                    {planets.map((planet) => (
                        <div key={planet.slug} className={classes.card} onClick={() => handleCardClick(planet)}>
                            <Image src={planet.image} alt={planet.slug} width={planet.slug === 'saturn' ? 200 : 100} height={100}/>
                            <div className={classes.cardInfo}>
                                <h3>{planet.title}</h3>
                                <p>{planet.summary.substring(0, 60)}...</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}