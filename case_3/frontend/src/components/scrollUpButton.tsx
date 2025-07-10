import Button from "./button";
import ArrowTop from "../assets/svgs/arrow-top.svg";
import useScrollTrigger from "../hooks/useScrollTrigger";

export default function ScrollUpButton() {
  const isScrolled = useScrollTrigger(100);

  return (
    <Button
      className={`fixed bottom-10 right-10 p-6 transition-opacity duration-300 z-100 ${
        isScrolled ? "opacity-100" : "opacity-0"
      }`}
      type="primary"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <img src={ArrowTop} alt="Scroll Up" className="size-6 text-inherit" />
    </Button>
  );
}
