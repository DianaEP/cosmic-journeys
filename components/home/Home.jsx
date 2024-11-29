'use client'

import Link from 'next/link';
import classes from './Home.module.css'
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
    console.log('executing');
    
    return (
      <div className={classes.homePageContainer}>
        <div className={classes.homeMain}>
            <motion.div 
                className={classes.emptyContainer}
                initial={{width: '100vw'}}
                animate={{width: '30%'}}
                transition={{duration: 1}}
            ></motion.div> 
          <h1>Journey Through Space</h1>
          <div className={classes.linkButton}><Link href='/all-planets'>Explore the solar system</Link></div>
        </div>
      </div>
    );
  }