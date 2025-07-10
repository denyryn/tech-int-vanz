import { FooterProvider, useFooter } from "../../contexts/footerContext";
import Logo from "/src/assets/logo/logo_landscape.png";
import Location from "/src/assets/svgs/location.svg";
import Phone from "/src/assets/svgs/phone.svg";

const GoToSection = (section: string) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function FooterSection() {
  const { footer } = useFooter();

  return (
    <footer id="contact" className=" text-black p-6">
      <div className="max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto grid grid-cols-2 grid-rows-2 md:grid-cols-3 flex-wrap justify-between gap-10">
        {/* Logo & Info */}
        <div className="space-y-4 max-w-xs order-last col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
          <img src={Logo} alt="Logo Oma Opa Bakery" className="h-16" />
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <img src={Location} alt="Ikon Lokasi" className="h-5 mt-1" />
              <p>{footer?.location}</p>
            </li>
            <li className="flex items-center gap-2">
              <img src={Phone} alt="Ikon Telepon" className="h-5 mt-1" />
              <p>{footer?.phone}</p>
            </li>
          </ul>
        </div>

        {/* Menu */}
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Menu</h2>
            <span className="h-1 w-full bg-[var(--color-accent)]" />
          </div>
          <ul className="text-sm space-y-2 ">
            <li>
              <a className="cursor-pointer" onClick={() => GoToSection("home")}>
                Beranda
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer"
                onClick={() => GoToSection("about")}
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer"
                onClick={() => GoToSection("product")}
              >
                Produk
              </a>
            </li>
          </ul>
        </div>

        {/* Bantuan */}
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Sosial Media</h2>
            <span className="h-1 w-full bg-[var(--color-accent)]" />
          </div>
          <ul className="text-sm space-y-2">
            {footer?.socials.map((social) => (
              <li key={social.name}>
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <FooterProvider>
      <FooterSection />
    </FooterProvider>
  );
}
