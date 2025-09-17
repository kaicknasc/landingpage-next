import { About } from "@/_components/about"
import { Footer } from "@/_components/footer";
import { Hero } from "@/_components/hero"
import { Services } from "@/_components/services";
import { Testimonials } from "@/_components/testimonials";
import localFont from "next/font/local";


const myCustomFont = localFont({
    src: "./fonts/SanFrancisco.ttf",
});

export default function Home () {
  return (
    <main className={myCustomFont.className}>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
}