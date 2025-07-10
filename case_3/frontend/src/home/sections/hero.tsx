import Button from "../../components/button";
import { HeroProvider, useHero } from "../../contexts/heroContext";

function HeroSection() {
  const { hero } = useHero();
  return (
    <section
      id="home"
      className="flex flex-col-reverse lg:flex-row w-screen min-h-screen overflow-hidden justify-center lg:justify-between items-center max-w-6xl lg:ps-12 "
    >
      <main className="z-10 lg:w-1/2 space-y-8 px-4">
        <div className="flex flex-col justify-center items-center lg:items-start space-y-4 *:lg:text-left text-center">
          <h1
            className="leading-snug"
            dangerouslySetInnerHTML={{ __html: hero?.title || "" }}
          />
          <p className="text-lg max-w-lg">{hero?.description}</p>
        </div>
        <div className="flex items-center justify-center lg:justify-start space-x-4">
          <Button
            type="primary"
            onClick={() => {
              window.open("https://wa.me/6281234567890", "_blank");
            }}
          >
            Pesan Sekarang
          </Button>
          <Button
            type="secondary"
            onClick={() => {
              window.open(
                "https://www.google.com/maps/search/?api=1&query=Oma+Opa&center=-6.2,106.8",
                "_blank"
              );
            }}
          >
            Lokasi Terdekat
          </Button>
        </div>
      </main>

      <div className="lg:absolute w-[70vw] lg:w-1/2 lg:h-dvh bottom-0 lg:bottom-auto lg:-right-0 object-cover overflow-hidden">
        <img
          src={hero?.image}
          alt="cake"
          className="size-full lg:size-full hover:rotate-12 object-contain scale-110 hover:scale-120 transition-all duration-300"
        />
        <span className="absolute lg:block hidden bg-[var(--color-accent)] rounded-full -z-10 size-[70vw] translate-y-1/2 lg:translate-y-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-50 top-50 scale-90" />
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <HeroProvider>
      <HeroSection />
    </HeroProvider>
  );
}
