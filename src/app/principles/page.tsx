import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { principles } from "@/data/content";

export default function PrinciplesPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-10">
      <Header />
      <hr className="border-border mb-8" />

      <section>
        <h2 className="text-lg font-bold tracking-[0.15em] text-white mb-6">
          PRINCIPLES
        </h2>

        <p className="mb-8">
          Principium. From the Latin principium, &ldquo;beginning,
          foundation.&rdquo; A fundamental truth or proposition that serves as
          the basis for a belief system, behavior or chain of reasoning.
        </p>

        <ol className="list-decimal list-outside ml-8 space-y-3">
          {principles.map((principle, i) => (
            <li key={i} className="pl-2">
              {principle.text}
            </li>
          ))}
        </ol>
      </section>

      <Footer />
    </main>
  );
}
