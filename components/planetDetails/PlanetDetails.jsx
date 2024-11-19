import Image from 'next/image';
import classes from './PlanetDetails.module.css';

export default function PlanetDetails({planet}){
    const{  slug, image, dimension, orbit, rotation, facts} = planet;
    return(
        <div>
            <Image src={image} alt={slug} width={100} height={100}/>
            <p>Dimension: <span>{dimension}</span></p>
            <p>Time needed to orbit around sun: <span>{orbit}</span></p>
            <p>Time needed to make a rotation around it&apos;s own axis: <span>{rotation}</span></p>
        </div>
    )
}