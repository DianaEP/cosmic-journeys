import classes from './Button.module.css'

export default function Button({children, textOnly, onClick, ...props}){
    return(
        <button onClick={onClick} className={textOnly ? classes.buttonText : classes.button} {...props}>{children}</button>
    )
}