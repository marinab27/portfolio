import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <InteractiveBackground />

      <main className="relative z-10 min-h-screen px-5 py-6 md:px-10 lg:px-20 xl:px-32">
        <Header />
        <Hero />
        <SelectedWork />
      </main>

      <div className="about-footer-gradient relative z-10">
        <div className="px-5 md:px-10 lg:px-20 xl:px-32">
          <About />
        </div>

        <Footer />
      </div>

      <BackToTop />
    </>
  );
}