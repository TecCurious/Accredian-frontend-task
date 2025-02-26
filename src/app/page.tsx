"use client"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
    <div>
      <Navbar />
      <Hero/> 
      <Process/>
      <Footer/>
    </div>
    </div>
  );
}
