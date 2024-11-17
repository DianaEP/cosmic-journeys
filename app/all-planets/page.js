import Image from "next/image";
import Link from "next/link";
import classes from './page.module.css'
import PlanetCarousel from "@/components/planet-carousel/PlanetCarousel";
import { getPlanets } from "@/lib/planets";



export default function AllPlanets(){
    const planets = getPlanets();
    return(
        <div className={classes.allPlanetsContainer}>
            <h1>The Worlds Around the Sun</h1>    
            <PlanetCarousel planets={planets}/>
        </div>
    )
}