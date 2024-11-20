import PlanetDetails from "@/components/planetDetails/PlanetDetails";
import { getPlanetDetails } from "@/lib/planets";
import classes from './page.module.css'

export default async function Planet({params}){
    const { slug } = await params;

    const planet = await getPlanetDetails(slug);

    console.log(planet);
    
    
    return(
        <main className={classes.planetWrapper}>
            <h1>Planet {planet.title}</h1>
            <PlanetDetails planet={planet}/>
        </main>
    )
}