import Navbar from "../components/navbar";
import Hero from "./sections/hero";
import Product from "./sections/product";
import Testimony from "./sections/testimony";
import About from "./sections/about";
import Footer from "./sections/footer";
import ScrollUpButton from "../components/scrollUpButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <About />
      <Testimony />
      <Footer />
      <ScrollUpButton />
    </>
  );
}
