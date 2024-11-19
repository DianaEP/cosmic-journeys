import Image from 'next/image';
import classes from './PlanetCarousel.module.css';
import Link from 'next/link';
import Button from '@/UI/button/Button';
import { AnimatePresence, motion } from 'framer-motion';

export default function PlanetCarouselOutput({selectedPlanet}){

    const contentVariants = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, x: 50, transition: { duration: 0.3 } },
      };

    return(
        <AnimatePresence mode="wait">
            <motion.div 
                key={selectedPlanet.slug}
                className={classes.content}
                variants={contentVariants}
                initial='initial'
                animate='animate'
                exit='exit'
            >
                    <Image src={selectedPlanet.image} alt={selectedPlanet.slug} width={selectedPlanet.slug === 'saturn' ? 600 : 300} height={300}/>    
                    <div className={classes[selectedPlanet.slug]}>
                        <h2>{selectedPlanet.title}</h2>
                    </div>
                    <div>
                        <p>{selectedPlanet.summary}</p>
                    </div>

                    <div className={classes.buttons}>
                        <Link href={`/all-planets/${selectedPlanet.slug}`}><Button> More facts about {selectedPlanet.title}</Button></Link>
                        <Link href='/'><Button textOnly>Home Page</Button></Link>
                    </div>
            </motion.div>
        </AnimatePresence>
    )
}


// initial={{ rotate: -45, opacity: 0, x: -100 }}
// animate={{ rotate: 0, opacity: 1, x: 0 }}
// transition={{ type: 'spring', stiffness: 60, damping: 5 }}

// initial={{ x: -100, opacity: 0 }}
// animate={{ x: 0, opacity: 1 }}
// transition={{ duration: 0.5, ease: 'easeOut' }}

 // initial={{scale: 2.9, opacity: 0.7, y: -200}}
// animate={{scale: 1, opacity: 1, y: 0}}
// transition={{type: 'spring', stiffness:  200, damping: 20}}

// initial={{scale: 0.5, opacity: 0., rotate: -15}}
// animate={{scale: 1, opacity: 1, rotate: 1}}
// transition={{type: 'spring', stiffness:  80, damping: 8}}

// initial={{ rotateY: 90, opacity: 0 }}
// animate={{ rotateY: 0, opacity: 1 }}
// transition={{ duration: 0.6, ease: 'easeOut' }}

// initial={{ scale: 0.8, opacity: 0 }}
// animate={{ scale: 1, opacity: 1 }}
// transition={{ duration: 0.5, ease: 'easeInOut' }}