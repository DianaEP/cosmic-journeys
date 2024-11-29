import classes from './error.module.css'

export default function NotFound(){
    return(
        <main className={classes.errorContainer}>
            <h1>Not found!</h1>
            <p>404</p>
            <p>Unfortunately, we could not find the requested page or resource.</p>
        </main>
    )
}