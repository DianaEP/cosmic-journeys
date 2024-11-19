import PlanetDetails from "@/components/planetDetails/PlanetDetails";
import { getPlanetDetails } from "@/lib/planets";

export default async function Planet({params}){
    const { slug } = await params;

    const planet = await getPlanetDetails(slug);

    console.log(planet);
    
    
    return(
        <main>
            <h1>Planet {planet.title}</h1>
            <PlanetDetails planet={planet}/>
        </main>
    )
}