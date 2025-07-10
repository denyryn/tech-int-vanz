type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "primary" | "secondary" | "tertiary";
};

export default function Button({
  children,
  className,
  onClick,
  type,
}: ButtonProps) {
  return (
    <button
      className={`${className} ${
        type === "primary"
          ? "w-fit p-6 py-3 bg-[var(--color-accent)] rounded-full font-bold hover:bg-white transition-colors border-2 border-[var(--color-accent)] hover:text-[var(--color-accent)] text-white"
          : type === "secondary"
          ? "w-fit p-6 py-3 border-2 border-[var(--color-accent)] transition-colors rounded-full font-bold hover:bg-[var(--color-accent)] hover:text-white text-[var(--color-accent)]"
          : "bg-gray-300"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
