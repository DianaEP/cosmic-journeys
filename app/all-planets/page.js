import Image from "next/image";
import Link from "next/link";


export default function AllPlanets(){
    return(
        <main>
            <h2>The Worlds Around the Sun</h2>
            <div><Link href='/'>Home Page</Link></div>

            <div>
            <Image src="/mercury.png" alt="earth-image" width={100} height={100}/>
            <Image src="/venus.png" alt="earth-image" width={100} height={100}/>
            <Image src="/earth.png" alt="earth-image" width={100} height={100}/>
            <Image src="/mars.png" alt="earth-image" width={100} height={100}/>
            <Image src="/jupiter.png" alt="earth-image" width={100} height={100}/>
            <Image src="/saturn.png" alt="earth-image" width={200} height={100}/>
            <Image src="/uranus.png" alt="earth-image" width={100} height={100}/>
            <Image src="/neptune.png" alt="earth-image" width={100} height={100}/>
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