import { AboutUsProvider, useAboutUs } from "../../contexts/aboutUsContext";

function AboutSection() {
  const { aboutUs } = useAboutUs();

  return (
    <section
      id="about"
      className="min-h-fit flex flex-col items-center justify-center py-16"
    >
      <div className="flex flex-col lg:flex-row w-full max-w-3xl lg:max-w-full mx-auto overflow-hidden">
        <img
          src={aboutUs?.short.image}
          alt="About"
          className="w-full min-h-80 object-cover object-center lg:w-1/2 lg:max-h-full"
        />
        <div className="w-full min-h-80 lg:min-h-0 lg:w-1/2 bg-[var(--color-accent)] flex flex-col justify-center py-16 px-4 lg:px-16 text-gray-800 *:lg:text-left *:text-center">
          <h1 className="leading-snug mb-6">Tentang Kami</h1>
          <p className="text-lg">{aboutUs?.short.content}</p>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <AboutUsProvider>
      <AboutSection />
    </AboutUsProvider>
  );
}
