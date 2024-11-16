import Link from "next/link";

export default function AllPlanets(){
    return(
        <main>
            <h2>The Worlds Around the Sun</h2>
            <div><Link href='/'>Home Page</Link></div>

            <div>
                <span><Link href='/all-planets/mercury'>Mercury</Link></span>
                <span><Link href='/all-planets/venus'>Venus</Link></span>
                <span><Link href='/all-planets/earth'>Earth</Link></span>
                <span><Link href='/all-planets/mars'>Mars</Link></span>
                <span><Link href='/all-planets/jupiter'>Jupiter</Link></span>
                <span><Link href='/all-planets/saturn'>Saturn</Link></span>
                <span><Link href='/all-planets/uranus'>Uranus</Link></span>
                <span><Link href='/all-planets/neptune'>Neptune</Link></span>

            </div>
        </main>
    )
}