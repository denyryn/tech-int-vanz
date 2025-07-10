import {
  TestimonyProvider,
  useTestimony,
} from "../../contexts/testimonyContext";
import type { TestimonyType } from "../../types/testimonyType";

const TestimonyCard = ({ testimony }: { testimony: TestimonyType }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-12 rounded-xl bg-white border border-gray-200 min-w-80">
      <img
        src={testimony.image}
        alt="Profile"
        className="size-30 rounded-full object-cover"
      />
      <h2>{testimony.name}</h2>
      <p className="text-base text-center font-light">{testimony.message}</p>
    </div>
  );
};

function TestimonySection() {
  const { testimonies } = useTestimony();

  return (
    <section
      id="testimony"
      className="min-h-screen flex flex-col items-center justify-center py-16 px-12"
    >
      <h1 className="text-center mb-12">Testimoni Pelanggan</h1>
      <div className="w-full overflow-hidden">
        <div className="flex gap-8 animate-marquee">
          {[...testimonies, ...testimonies].map((testimony, index) => (
            <TestimonyCard
              key={`${testimony.name}-${index}`}
              testimony={testimony}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Testimony() {
  return (
    <TestimonyProvider>
      <TestimonySection />
    </TestimonyProvider>
  );
}
