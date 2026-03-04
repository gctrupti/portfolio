import Terminal from "./Terminal";

export default function DeveloperSnapshot() {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">

      <p className="text-purple-400 text-xs tracking-widest mb-2">
        TERMINAL
      </p>

      <h2 className="text-4xl font-bold mb-10">
        Developer <span className="text-gray-400">snapshot.</span>
      </h2>

      <Terminal />

    </section>
  );
}