
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Companies } from "@/components/companies";
import { Community } from "@/components/community";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Companies />
      <Community />
      <Contact />
      <Footer />
    </main>
  );
}
