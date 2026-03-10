import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import AboutUniversity from "../Components/AboutUniversity/AboutUniversity";
import AboutEEE from "../Components/AboutEEE/AboutEEE";
import CallForPapers from "../Components/CallForPapers/CallForPapers";
// import Sponsors from "../components/Sponsors/Sponsors";
// import Contact from "../components/Contact/Contact";
// import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <AboutUniversity />
      <AboutEEE/>
      <CallForPapers/>
      {/* <Sponsors />
      
      <Contact />
      <Footer /> */}
    </>
  );
}