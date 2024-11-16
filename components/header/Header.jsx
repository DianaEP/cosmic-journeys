import Link from "next/link";
import { TbBrandPlanetscale } from "react-icons/tb";
import classes from './Header.module.css'

export default function Header(){
    return(
        <header className={classes.header}>
            <div>
                <span><TbBrandPlanetscale /></span>
                <span>Cosmic Journey</span>
            </div>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/all-planets'>All planets</Link>
            </nav>
        </header>
    )
}