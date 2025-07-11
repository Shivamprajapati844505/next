
import About from './about/page';
import Link from "next/link";
import Services from './services/page.js';

export default function Home() { 

return (     

    <>
    <h1>Welcome to Home.</h1>
    <Link href="/about">About</Link> { }<Link href="/services">Services</Link>
    </>
  );
}
