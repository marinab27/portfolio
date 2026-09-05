import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen px-5 py-6 md:px-10 lg:px-20 xl:px-32">
        <Header />
        <Hero />
        <SelectedWork />
      </main>

      <div className="bg-gradient-to-b from-[#F7F6F2] via-[#F2F3F8] to-[#DDE4F6]">
        <div className="px-5 md:px-10 lg:px-20 xl:px-32">
          <About />
        </div>

        <Footer />
      </div>
    </>
  );
}