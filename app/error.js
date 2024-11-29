'use client'

import classes from './error.module.css'

export default function Error(){
    return(
        <main className={classes.errorContainer}>
            <h1>An error occurred!</h1>
            <p>Failed to fetch data.Please try again later.</p>
        </main>
    )
}