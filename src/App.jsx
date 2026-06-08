// import { useScrollReveal } from './hooks/useScrollReveal'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import WhyUs from './components/WhyUs'
// import Stats from './components/Stats'
// import Partners from './components/Partners'
// import Blog from './components/Blog'
// import Testimonials from './components/Testimonials'
// import FAQ from './components/FAQ'
// import CTABanner from './components/CTABanner'
// import Footer from './components/Footer'

// export default function App() {
//   useScrollReveal()
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <Hero />
//       <WhyUs />
//       <Stats />
//       <Partners />
//       <Blog />
//       <Testimonials />
//       <FAQ />
//       <CTABanner />
//       <Footer />
//     </div>
//   )
// }

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import StrategySection from "./components/StrategySection";
import PartnersSection from "./components/PartnersSection";
import BlogSection from "./components/BlogSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustSection />
      <StrategySection />
      <PartnersSection />
      <BlogSection />
      <TestimonialsSection />
      <FaqSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
