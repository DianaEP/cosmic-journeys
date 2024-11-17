import Link from "next/link";
import classes from "./page.module.css";
import Image from "next/image";

export default function Home() {
  console.log('executing');
  
  return (
    <div className={classes.homePageContainer}>
      {/* <div>
        <Image src='/a.png' alt="astronaut" width={400} height={400}/>
      </div> */}
      <main className={classes.homeMain}>
        <div className={classes.emptyContainer}></div>
        <h1>Journey Through Space</h1>
        <div className={classes.linkButton}><Link href='/all-planets'>Explore the solar system</Link></div>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
