import Image from "next/image";
import Links from 'next/link';
import Header from "./componenets/Header";
import { Herosection } from "./componenets/Herosection";
import { Footer } from "./componenets/Footer";
 export default function Home() {
  return (
    
    <div>
      <Links href="/contact" className="bg-purple-200 text-fuchsia-700"> contact us </Links>
      <Links href="/about" className="bg-purple-400 text-fuchsia-700"> about page </Links>
      <Header/>
      <h1 className="text-fuchsia-950 font-serif "> 
        ^Welcome To Tech World^
      </h1>
      <Herosection/>
      <Footer/>
     
      
     </div>
  
  );
}

