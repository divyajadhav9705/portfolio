import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Grid";


import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import { Experience } from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main  className="relative bg-black-100  flex justify-center items-center flex-col  mx-auto sm:px-10 px-5" >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems	={navItems}/>
        <Hero/>
        <Grid/><br/><br/>
        <RecentProjects />
        <Clients/>
        <Experience />
        <Footer />
      </div>

    </main>
    
  )
}
