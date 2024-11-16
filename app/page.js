import Link from "next/link";
import classes from "./page.module.css";
import Image from "next/image";

export default function Home() {
  console.log('executing');
  
  return (
    <div>
      <main>
        <Image src="/mercury.png" alt="earth-image" width={100} height={100}/>
        <Image src="/venus.png" alt="earth-image" width={100} height={100}/>
        <Image src="/earth.png" alt="earth-image" width={100} height={100}/>
        <Image src="/mars.png" alt="earth-image" width={100} height={100}/>
        <Image src="/jupiter.png" alt="earth-image" width={100} height={100}/>
        <Image src="/saturn.png" alt="earth-image" width={200} height={100}/>
        <Image src="/uranus.png" alt="earth-image" width={100} height={100}/>
        <Image src="/neptune.png" alt="earth-image" width={100} height={100}/>
        <h1>Embark on a Journey Through the Solar System</h1>
        <div><Link href='/all-planets'>Explore the solar system</Link></div>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
