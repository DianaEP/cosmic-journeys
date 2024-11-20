'use client'


import PlanetAnimation from './PlanetAnimation';
import classes from './PlanetDetails.module.css';





export default function PlanetDetails({planet}){
    const{ facts} = planet;
   

    
    
    return(
        <div className={classes.planetDetailsWrapper}>
           <PlanetAnimation planet={planet}/>
           <div>
                <p> Interesting facts about this planet </p>
                <ul>
                    {facts.map((fact) => (
                        <li key={fact}>{fact}</li>
                    ))}
                </ul>
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