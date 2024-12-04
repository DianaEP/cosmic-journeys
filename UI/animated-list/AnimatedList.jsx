import { AnimatePresence, motion } from 'framer-motion';
import classes from './AnimatedList.module.css'

export default function AnimatedList({items, isVisible, renderItem}){
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
        <AnimatePresence mode='wait' >
        {isVisible && (
            <motion.ul
                className={classes.listItems}
                variants={staggerContainer}
                initial='initial'
                animate='animate'
                exit='exit'
            >
                {items.map((item,index) => (
                     <motion.li 
                        key={item.id || index} 
                        className={classes.listItem}
                        variants={staggerContainer.child}
                        layout
                        exit={{ opacity: 0 }}
                    >
                        {renderItem ? renderItem(item) : item}
                    </motion.li>
                ))}

            </motion.ul>
        )}
    </AnimatePresence>
    )
}