import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Emergency } from "@/components/emergency";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Materials } from "@/components/materials";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";
import { WhyChoose } from "@/components/why-choose";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Services />
      <WhyChoose />
      <Emergency />
      <HowItWorks />
      <Work />
      <Reviews />
      <About />
      <Materials />
      <Faq />
      <FinalCta />
      <Contact />
    </main>
  );
}
