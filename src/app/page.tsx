import Image from "next/image";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Clothes from "@/components/Clothes"
import Formen from "@/components/Formen";
import CardRows from "@/components/CardRows"
import Footer from "@/components/Footer";
import EndF from "@/components/EndF";



export default function Home() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Hero/>
      <Clothes/>
      <Formen/>
      <CardRows/>
      <Footer/>
      <EndF/>
      
      

    </div>
  );
}
