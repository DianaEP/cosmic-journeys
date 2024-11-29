'use client'

import Link from "next/link";
import { TbBrandPlanetscale } from "react-icons/tb";

import classes from './Header.module.css'
import { usePathname } from "next/navigation";

export default function Header(){
    const pathname = usePathname();

    const isActive = (path) => pathname === path;
    return(
        <header className={classes.header}>
            <div className={classes.logoName}>
                <span>C</span>
                <span className={classes.logo}><TbBrandPlanetscale /></span>
                <span>smic Journey</span>
            </div>
            <nav className={classes.links}>
                <Link href='/'>
                    <span className={isActive('/') ? classes.active : ''}>Home</span>
                </Link>
                <Link href='/all-planets'>
                    <span className={isActive('/all-planets') ? classes.active : ''}>All planets</span>
                </Link>
                <Link href='/curiosities'>
                    <span className={isActive('/curiosities') ? classes.active : ''}>Galactic Curiosities</span>
                </Link>
                
            </nav>
        </header>
    )
}